// File: src/pages/Settings.jsx

import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";

export default function Setting() {
  const { user, login } = useAuth();
  
  const [form, setForm] = useState({
    nickname: "",
    avatar_url: "",
    email: "",
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const token = localStorage.getItem("token");
  
  // Tạo một ref để trỏ tới input file bị ẩn
  const fileInputRef = useRef(null);

  // 1. Lấy dữ liệu user khi mở trang
  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
          setLoading(false);
          return;
      }
      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        
        if (res.ok && data.success) {
          setForm({
            nickname: data.data.nickname || data.data.display_name || "",
            avatar_url: data.data.avatar_url || "",
            email: data.data.email || "",
          });
          login(data.data, token);
        } else {
          console.error("Lỗi tải profile:", data.error);
        }
      } catch (err) {
        console.error("Lỗi fetch profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token, login]);

  // 2. Xử lý khi gõ input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Lưu thay đổi Nickname
  const handleSaveNickname = async () => {
    setSaving(true);
    try {
      const res = await fetch("http://localhost:5000/api/profile/update-nickname", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nickname: form.nickname }),
      });
      
      const data = await res.json();
      if (res.ok) {
        alert("✅ Cập nhật nickname thành công!");
        // Cập nhật AuthContext
        login({ ...user, nickname: data.nickname, display_name: data.nickname }, token);
      } else {
        alert("❌ Lỗi: " + (data.error || "Không thể lưu thay đổi"));
      }
    } catch (err) {
      alert("❌ Lỗi kết nối server");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  // 4. (MỚI) Xử lý khi chọn file (Tự động tải lên)
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    // 'avatar' phải TRÙNG KHỚP với tên field trong upload.single('avatar') ở backend
    formData.append('avatar', file);

    setSaving(true); // Báo là đang "Lưu"
    try {
      const res = await fetch("http://localhost:5000/api/profile/upload-avatar", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // KHÔNG set 'Content-Type' ở đây, trình duyệt sẽ tự làm
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Tải ảnh đại diện thành công!");
        // Cập nhật state của form
        setForm(prev => ({ ...prev, avatar_url: data.avatar_url }));
        // Cập nhật AuthContext
        login({ ...user, avatar_url: data.avatar_url }, token);
      } else {
        throw new Error(data.error || "Tải ảnh thất bại");
      }
    } catch (err) {
      alert("❌ Lỗi: " + err.message);
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  // 5. (MỚI) Hàm kích hoạt input file
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  if (loading)
    return (
      <div className="flex h-screen justify-center items-center text-gray-600">
        Đang tải thông tin tài khoản...
      </div>
    );

  return (
    <div className="flex min-h-screen bg-blue-600">
      <Sidebar />
      <main className="flex-1 bg-gradient-to-b from-blue-50 to-blue-200 flex flex-col items-center py-10 px-6 overflow-y-auto">
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 uppercase tracking-wide">
            Profile Settings
          </h2>
          
          {/* (MỚI) Input file bị ẩn */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
            accept="image/png, image/jpeg, image/gif"
          />

          {/* Avatar & Display Name */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              {form.avatar_url ? (
                <img src={form.avatar_url} alt="avatar" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-600 text-2xl font-semibold">
                  {form.nickname?.[0]?.toUpperCase() || "A"}
                </span>
              )}
              
              {/* (SỬA) Nút "Change Photo" */}
              <button 
                onClick={triggerFileInput}
                className="absolute bottom-0 w-full text-sm bg-blue-500 text-white py-1 hover:bg-blue-600 transition-opacity opacity-70 hover:opacity-100"
              >
                Change
              </button>
            </div>
            
            <input
              type="text"
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
              placeholder="Display Name"
              className="mt-4 border border-gray-300 rounded-lg p-2 w-64 text-center focus:outline-blue-400"
            />
          </div>

          {/* Account Info */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3 text-gray-800">Account Info</h3>
            <input
              type="email"
              value={form.email}
              readOnly
              className="border p-2 rounded-lg w-full bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              disabled={saving}
              onClick={handleSaveNickname} // Chỉ lưu nickname
              className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60"
            >
              {saving ? "Đang lưu..." : "Save Changes"}
            </button>
          </div>
        </div>
        <p className="mt-8 text-gray-500 text-sm">
          © 2025 ComicTranslator. All rights reserved.
        </p>
      </main>
    </div>
  );
}