import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("sidebar");

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded transition-colors
     ${isActive ? "bg-blue-500 text-black font-semibold" : "hover:bg-red-200 text-white"}`;

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <aside className="w-64 bg-blue-700 text-white flex flex-col p-6 relative">
      {/* Logo */}
      <h1
        className="text-2xl font-bold mb-8 cursor-pointer text-white"
        onClick={() => navigate("/menu")}
      >
        ComicTranslator
      </h1>

      {/* Menu links */}
      <nav className="flex flex-col gap-2 text-black">
        <NavLink to="/menu" className={linkClasses}>
          {t("home")}
        </NavLink>
        <NavLink to="/tokens" className={linkClasses}>
          {t("plans")}
        </NavLink>
        <NavLink to="/settings" className={linkClasses}>
          {t("settings")}
        </NavLink>
      </nav>

      {/* Bottom section */}
      <div className="mt-auto flex flex-col gap-2">
        <NavLink to="/" className={linkClasses}>
          ← {t("back")}
        </NavLink>

        <button
          onClick={logout}
          className="text-left px-3 py-2 rounded hover:bg-blue-800 text-red-300"
        >
          {t("logout")}
        </button>

        {/* Language switch */}
        <button
          onClick={toggleLanguage}
          className="mt-3 bg-blue-900/80 text-white px-3 py-2 rounded-full text-xs hover:bg-blue-800 transition"
        >
          {i18n.language === "en" ? "🇺🇸 English" : "🇻🇳 Tiếng Việt"}
        </button>
      </div>

      <footer className="mt-4 text-xs text-blue-200">
        © 2025 ComicTranslator. {t("rights")}
      </footer>
    </aside>
  );
}
