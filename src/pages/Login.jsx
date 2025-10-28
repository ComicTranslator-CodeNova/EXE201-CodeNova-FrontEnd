import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      // ✅ Lưu user vào context
      login(data.user);

      // ✅ (tuỳ chọn) lưu token để dùng cho API sau này
      localStorage.setItem("token", data.token);

      navigate("/"); // chuyển về home
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      {/* <div className="flex flex-col justify-center bg-black text-white w-1/2 p-16">
        <h1 className="text-2xl font-bold mb-6">ComicTranslator</h1>
        <h2 className="text-4xl font-bold mb-4">
          Translate Comics Instantly in Your Language
        </h2>
        <p className="text-gray-300">
          No downloads. No hassle. ComicTranslator brings every panel to life
          in your tongue.
        </p>
      </div> */}

      <div className="relative flex flex-col justify-center text-white w-1/2 p-16 overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/videos/background_login.mp4" type="video/mp4" />
          {/* fallback nếu browser không support */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay nội dung */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-6">ComicTranslator</h1>
          <h2 className="text-4xl font-bold mb-4">
            Translate Comics Instantly in Your Language
          </h2>
          <p className="text-gray-300">
            No downloads. No hassle. ComicTranslator brings every panel to life
            in your tongue.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex flex-col justify-center w-1/2 p-16">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-3xl font-semibold mb-2">Login</h2>
          <p className="text-gray-500 mb-6">
            Welcome back. Please login to continue.
          </p>

          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-3 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-2 p-3 border rounded"
              required
            />

            <div className="text-right mb-6">
              <Link
                to="/forgot-password"
                className="text-blue-500 text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full mb-6"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-400 mb-4">or continue with</p>
          <div className="flex justify-center gap-4 mb-6">
            <button className="border p-2 rounded-full w-10 h-10">G</button>
            <button className="border p-2 rounded-full w-10 h-10">f</button>
            <button className="border p-2 rounded-full w-10 h-10">GH</button>
          </div>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
