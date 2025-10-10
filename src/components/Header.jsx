import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const doScroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    // Nếu đang ở trang khác, điều hướng về "/" rồi mới scroll
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
      <Link to="/" className="text-2xl font-bold tracking-wide">
        ComicTranslator
      </Link>

      {/* Menu */}
      <nav className="flex gap-4">
        <button
          onClick={() => scrollToSection("how")}
          className="hover:text-blue-400 transition"
        >
          How It Works
        </button>
        <button
          onClick={() => scrollToSection("features")}
          className="hover:text-blue-400 transition"
        >
          Features
        </button>
        <button
          onClick={() => scrollToSection("pricing")}
          className="hover:text-blue-400 transition"
        >
          Pricing
        </button>
        <button
          onClick={() => scrollToSection("faq")}
          className="hover:text-blue-400 transition"
        >
          FAQ
        </button>

        {/* ✅ Nút Menu */}
        <button
          onClick={handleMenuClick}
          className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          Menu
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
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="border border-white px-3 py-1 rounded hover:bg-gray-700"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}