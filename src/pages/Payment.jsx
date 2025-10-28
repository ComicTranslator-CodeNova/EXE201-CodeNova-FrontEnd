import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { packageId, price } = location.state || {}; // lấy data từ Tokens.jsx

  const [method, setMethod] = useState("card");

  const handleCancel = () => {
    navigate("/tokens");
  };

  const handlePay = () => {
    alert(`Thanh toán ${packageId} Tokens - $${price} bằng ${method}`);
    // Ở đây có thể gọi API thanh toán
  };

  return (
    <div className="flex min-h-screen bg-blue-600">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="relative flex-1 flex justify-center items-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/background_payment.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient để chữ vẫn rõ */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-blue-200/70"></div>

        {/* Payment content */}
        <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Header */}
          <h1 className="text-xl font-bold text-center mb-2 uppercase text-gray-800">
            Select Payment Method
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Choose your preferred payment option below.
          </p>

          {/* Package Info */}
          <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg mb-6">
            <span className="font-medium">Selected package</span>
            <span className="font-semibold text-blue-600">
              {packageId || "—"} Tokens
            </span>
            <span className="text-gray-700">${price?.toFixed(2) || "—"}</span>
          </div>

          {/* Payment Methods */}
          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-blue-500 transition">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={method === "card"}
                onChange={() => setMethod("card")}
              />
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
            <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-blue-500 transition">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={method === "paypal"}
                onChange={() => setMethod("paypal")}
              />
              <span className="font-medium flex items-center gap-2">🅿️ PayPal</span>
            </label>
          </div>

          {/* Card Form */}
          {method === "card" && (
            <div className="space-y-3 mb-6">
              <input
                className="w-full p-2 border rounded-lg"
                placeholder="Cardholder Name"
              />
              <input
                className="w-full p-2 border rounded-lg"
                placeholder="Card Number"
              />
              <div className="grid grid-cols-3 gap-2">
                <input className="p-2 border rounded-lg" placeholder="MM/YY" />
                <input className="p-2 border rounded-lg" placeholder="CVV" />
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handlePay}
              className="bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
            >
              Continue to Payment
            </button>
            <button
              onClick={handleCancel}
              className="text-blue-500 text-sm hover:underline"
            >
              Cancel
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-4">
            🔒 Your payment is secured with SSL encryption.
          </p>
        </div>
      </main>


    </div>
  );
}
