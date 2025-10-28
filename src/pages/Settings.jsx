import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";

export default function Setting() {
  const { user, login } = useAuth(); // login ở đây để update lại context khi update profile
  const [form, setForm] = useState({
    display_name: "",
    avatar_url: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const token = localStorage.getItem("token");

  // ----------- Lấy dữ liệu user khi mở trang -----------
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setForm({
            display_name: data.display_name || "",
            avatar_url: data.avatar_url || "",
            email: data.email || "",
          });
          // cập nhật lại context (để đồng bộ header / user info)
          login(data, token);
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

  // ----------- Xử lý khi gõ input -----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ----------- Lưu thay đổi profile -----------
  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          display_name: form.display_name,
          avatar_url: form.avatar_url,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Cập nhật profile thành công!");
        login({ ...user, ...form }, token);
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

          {/* Avatar & Display Name */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              {form.avatar_url ? (
                <img src={form.avatar_url} alt="avatar" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-600 text-2xl font-semibold">
                  {form.display_name?.[0]?.toUpperCase() || "A"}
                </span>
              )}
              <button className="absolute bottom-0 w-full text-sm bg-blue-500 text-white py-1 rounded-b-xl hover:bg-blue-600">
                Change Photo
              </button>
            </div>
            <input
              type="text"
              name="display_name"
              value={form.display_name}
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
              className="border p-2 rounded-lg w-full bg-gray-100 text-gray-600"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              disabled={saving}
              onClick={handleSave}
              className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60"
            >
              {saving ? "Đang lưu..." : "Save Changes"}
            </button>
          </div>
        </div>
        <p className="mt-8 text-gray-500 text-sm">
          © 2025 ComicTranslation. All rights reserved.
        </p>
      </main>
    </div>
  );
}
