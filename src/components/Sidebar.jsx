import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded transition-colors
     ${isActive ? "bg-blue-500 text-white font-semibold" : "hover:bg-blue-800"}`;

  return (
    <aside className="w-64 bg-blue-700 text-white flex flex-col p-6">
      <h1
        className="text-2xl font-bold mb-8 cursor-pointer"
        onClick={() => navigate("/menu")}
      >
        ComicTranslator
      </h1>

      {/* Menu links */}
      <nav className="flex flex-col gap-2">
        <NavLink to="/menu" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/history" className={linkClasses}>
          History
        </NavLink>
        <NavLink to="/tokens" className={linkClasses}>
          Tokens
        </NavLink>
        <NavLink to="/settings" className={linkClasses}>
          Settings
        </NavLink>
        <NavLink to="/billing" className={linkClasses}>
          Billing
        </NavLink>
      </nav>

      {/* Bottom section */}
      <div className="mt-auto flex flex-col gap-2">
        {/* Back to main website */}
        <NavLink to="/" className={linkClasses}>
          ← Back to Web Page
        </NavLink>

        {/* Logout */}
        <button
          onClick={logout}
          className="text-left px-3 py-2 rounded hover:bg-blue-800 text-red-300"
        >
          Log out
        </button>
      </div>

      <footer className="mt-4 text-xs text-blue-200">
        © 2025 ComicTranslator. All rights reserved.
      </footer>
    </aside>
  );
}
