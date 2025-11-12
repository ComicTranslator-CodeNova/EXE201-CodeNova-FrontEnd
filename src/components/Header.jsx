import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import codenova from "../assets/codenova.png";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation("header");

  const scrollToSection = (id) => {
    const doScroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 100);
    } else {
      doScroll();
    }
  };

  const handleMenuClick = () => {
    if (user) {
      navigate("/menu");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Logo */}
      <Link to="/">
        <img src={codenova} alt="ComicTranslator" className="h-20 w-30" />
      </Link>

      {/* Menu */}
      <nav className="flex gap-4">
        <button onClick={() => scrollToSection("how")} className="hover:text-blue-400 transition">
          {t("nav_how")}
        </button>
        <button onClick={() => scrollToSection("features")} className="hover:text-blue-400 transition">
          {t("nav_features")}
        </button>
        <button onClick={() => scrollToSection("pricing")} className="hover:text-blue-400 transition">
          {t("nav_pricing")}
        </button>
        <button onClick={() => scrollToSection("faq")} className="hover:text-blue-400 transition">
          {t("nav_faq")}
        </button>
        <button onClick={() => scrollToSection("testimonials")} className="hover:text-blue-400 transition">
          {t("nav_reviews")}
        </button>

        {/* ✅ Menu button */}
        <button onClick={handleMenuClick} className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition">
          {t("nav_menu")}
        </button>
      </nav>

      {/* User info */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span>{user.display_name || user.id}</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              {t("nav_logout")}
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 text-white"
            >
              {t("nav_login")}
            </Link>
            <Link
              to="/register"
              className="border border-white px-3 py-1 rounded hover:bg-gray-700"
            >
              {t("nav_register")}
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
