import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import api from "../api";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  // Nhận đúng từ Tokens.jsx
  const { planId, name, price } = location.state || {};

  const [method, setMethod] = useState("momo");
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    navigate("/tokens");
  };

  const handlePay = async () => {
    if (method !== "momo") {
      alert("Hiện tại hệ thống chỉ hỗ trợ thanh toán qua MoMo.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/payment/momo/create", {
        plan_id: planId,   // ✔ gửi đúng GUID
      });

      window.location.href = res.data.data.payUrl;
    } catch (err) {
      console.error(err);
      alert("Không thể tạo thanh toán. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-blue-600">
      <Sidebar />

      <main className="relative flex-1 flex justify-center items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/background_payment.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-blue-200/70"></div>

        <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h1 className="text-xl font-bold text-center mb-2 uppercase text-gray-800">
            Select Payment Method
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Choose your preferred payment option below.
          </p>

          <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg mb-6">
            <span className="font-medium">Selected Plan</span>
            <span className="font-semibold text-blue-600">{name}</span>
            <span className="text-gray-700">
              {price.toLocaleString("vi-VN")} ₫
            </span>
          </div>

          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-3 p-3 border rounded-lg opacity-40 cursor-not-allowed">
              <input type="radio" disabled />
              <span className="font-medium flex items-center gap-2">
                💳 Credit / Debit Card
              </span>
            </label>

            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-blue-500 transition">
              <input
                type="radio"
                name="payment"
                value="momo"
                checked={method === "momo"}
                onChange={() => setMethod("momo")}
              />
              <span className="font-medium flex items-center gap-2">🏦 MoMo</span>
            </label>

            <label className="flex items-center gap-3 p-3 border rounded-lg opacity-40 cursor-not-allowed">
              <input type="radio" disabled />
              <span className="font-medium flex items-center gap-2">🅿️ PayPal</span>
            </label>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handlePay}
              disabled={loading}
              className="bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
            >
              {loading ? "Processing..." : "Continue to Payment"}
            </button>

            <button
              onClick={handleCancel}
              className="text-blue-500 text-sm hover:underline"
            >
              Cancel
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            🔒 Your payment is secured with SSL encryption.
          </p>
        </div>
      </main>
    </div>
  );
}
