import React from "react";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { user } = useAuth();
  const { t, i18n } = useTranslation("menu");

  // 🔁 Chuyển ngôn ngữ
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="flex min-h-screen bg-blue-600">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="relative flex-1 overflow-hidden p-8">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/background_menu.mp4" type="video/mp4" />
          {t("video_fallback")}
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-100/60"></div>

        {/* 🔘 Nút chuyển ngữ */}
        <div className="absolute top-6 right-6 z-50">
          <button
            onClick={toggleLanguage}
            className="bg-gray-900/60 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800"
          >
            {i18n.language === "en" ? "🇺🇸 English" : "🇻🇳 Tiếng Việt"}
          </button>
        </div>

        {/* Actual content */}
        <div className="relative z-10">
          
          {/* === (BẮT ĐẦU PHẦN SỬA) === */}
          {/* Header user info (ĐÃ DESIGN LẠI) */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 flex items-center gap-5">
            
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
              {user?.avatar_url ? (
                // Nếu có avatar_url, hiển thị ảnh
                <img src={user.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                // Nếu không, hiển thị chữ cái đầu
                <span className="text-white text-3xl font-bold">
                  {(user?.display_name || user?.email || "U")[0].toUpperCase()}
                </span>
              )}
            </div>

            {/* Thông tin Chào mừng */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Welcome back, {user?.display_name || user?.email}! 👋
              </h2>
              <p className="text-gray-600 mt-1">
                Here's a quick look at your ComicTranslator dashboard.
              </p>
            </div>
          </div>
          {/* === (KẾT THÚC PHẦN SỬA) === */}


          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white/90 backdrop-blur-sm border rounded-xl shadow">
              <h3 className="text-sm text-gray-500">{t("active_plan")}</h3>
              <span className="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {t("monthly_pass")}
              </span>
              <p className="text-xs text-gray-400 mt-1">
                {t("renews_on")} June 15, 2025
              </p>
            </div>

            <div className="p-6 bg-white/90 backdrop-blur-sm border rounded-xl shadow">
              <h3 className="text-sm text-gray-500">{t("translation_stats")}</h3>
              <p className="text-3xl font-bold mt-2 text-blue-600">65</p>
              <p className="text-xs text-green-600 mt-1">{t("growth")}</p>
            </div>
          </div>

          <div className="text-gray-400 italic text-center py-12">
            {t("no_recent")}
          </div>
        </div>
      </main>
    </div>
  );
}