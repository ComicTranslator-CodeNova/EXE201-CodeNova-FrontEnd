import React from "react";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";

export default function Menu() {
  const { user } = useAuth();

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
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-100/60"></div>

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
            {/* <div className="p-6 bg-white/90 backdrop-blur-sm border rounded-xl shadow">
              <h3 className="text-sm text-gray-500">Tokens Remaining</h3>
              <p className="text-3xl font-bold mt-2 text-blue-600">42</p>
              <p className="text-xs text-gray-400">Approx. 42 comic pages</p>
            </div> */}
            <div className="p-6 bg-white/90 backdrop-blur-sm border rounded-xl shadow">
              <h3 className="text-sm text-gray-500">Active Plan</h3>
              <span className="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                Monthly Pass
              </span>
              <p className="text-xs text-gray-400 mt-1">
                Renews on June 15, 2025
              </p>
            </div>
            <div className="p-6 bg-white/90 backdrop-blur-sm border rounded-xl shadow">
              <h3 className="text-sm text-gray-500">Translation Stats</h3>
              <p className="text-3xl font-bold mt-2 text-blue-600">65</p>
              <p className="text-xs text-green-600 mt-1">+12% this month</p>
            </div>
          </div>

          {/* Need more tokens?
          <div className="p-6 bg-blue-100/80 backdrop-blur-sm rounded-xl shadow mb-8 max-w-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Need more tokens?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Purchase additional tokens or upgrade to a subscription plan for
              unlimited translations.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Buy Tokens
              </button>
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50">
                Upgrade Plan
              </button>
            </div>
          </div> */}

          <div className="text-gray-400 italic text-center py-12">
            No recent comics to display yet.
          </div>
        </div>
      </main>
    </div>
  );
}