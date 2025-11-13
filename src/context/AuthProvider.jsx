import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  // 1. Khởi tạo state từ localStorage
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      localStorage.removeItem("user");
      return null;
    }
  });

  // 2. Lắng nghe sự kiện
  useEffect(() => {
    // Sự kiện khi localStorage thay đổi (từ tab khác)
    const handleStorageChange = (e) => {
      if (e.key === "user") {
        try {
          setUser(e.newValue ? JSON.parse(e.newValue) : null);
        } catch {
          setUser(null);
        }
      }
      // Nếu token bị xóa (từ tab khác), đăng xuất
      if (e.key === "token" && !e.newValue) {
        localStorage.removeItem("user");
        setUser(null);
      }
    };

    // Sự kiện khi nhận tin nhắn từ extension (content.js)
    const handleExtensionMessage = (event) => {
      const msg = event.data;
      if (msg && msg.type === 'CODENOVA_TOKEN_SAVED' && msg.user) {
        // Extension báo đã đăng nhập
        console.log("AuthProvider: Nhận user/token từ extension");
        localStorage.setItem("user", JSON.stringify(msg.user));
        localStorage.setItem("token", msg.token);
        setUser(msg.user);
      } else if (msg && msg.type === 'CODENOVA_TOKEN_CLEARED') {
        // Extension báo đã đăng xuất
        console.log("AuthProvider: Nhận lệnh đăng xuất từ extension");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("message", handleExtensionMessage);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("message", handleExtensionMessage);
    };
  }, []);

  // 3. Hàm login (giờ sẽ nhận cả token)
  const login = (userData, token) => {
    try {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token); // <-- Lưu cả token
      setUser(userData);
      // Báo cho extension biết (Login.jsx cũng làm việc này, nhưng làm ở đây sẽ tập trung hơn)
      window.postMessage(
        { type: "CODENOVA_SET_TOKEN", token: token, user: userData },
        window.origin
      );
    } catch (e) { 
      console.error("Lỗi khi lưu user/token", e); 
    }
  };

  // 4. Hàm logout
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    // Báo cho extension biết
    window.postMessage({ type: "CODENOVA_CLEAR_TOKEN" }, window.origin);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};