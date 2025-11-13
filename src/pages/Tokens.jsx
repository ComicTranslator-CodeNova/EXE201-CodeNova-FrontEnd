import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "react-i18next";

export default function Tokens() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("tokens");

  const [selected, setSelected] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // 🔁 Nút đổi ngôn ngữ
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const plans = [
    {
      name: t("plan_free_name"),
      amount: 50,
      price: 0,
      desc: t("plan_free_desc"),
      features: t("plan_free_features", { returnObjects: true }),
    },
    {
      name: t("plan_standard_name"),
      amount: 500,
      price: 260000,
      desc: t("plan_standard_desc"),
      features: t("plan_standard_features", { returnObjects: true }),
      recommended: true,
    },
    {
      name: t("plan_premium_name"),
      amount: 1200,
      price: 520000,
      desc: t("plan_premium_desc"),
      features: t("plan_premium_features", { returnObjects: true }),
    },
  ];

  const handleSelect = (plan) => {
    setSelected(plan);
    setShowPopup(true);
  };

  const handleContinue = () => {
    if (!selected) return;
    setShowPopup(false);
    navigate("/payment", {
      state: { packageId: selected.amount, price: selected.price },
    });
  };

  const handleCancel = () => {
    setShowPopup(false);
    setSelected(null);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Sidebar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative">
        {/* Background video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/videos/background_menu.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 🔘 Nút đổi ngôn ngữ */}
        <div className="absolute top-6 right-6 z-50">
          <button
            onClick={toggleLanguage}
            className="bg-gray-900/60 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800"
          >
            {i18n.language === "en" ? "🇺🇸 English" : "🇻🇳 Tiếng Việt"}
          </button>
        </div>

        {/* Header */}
        <div className="relative z-10 text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>
          <p className="text-gray-600 mt-2">{t("subtitle")}</p>
        </div>

        {/* Pricing Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-md border transition-all duration-300 flex flex-col p-8 hover:scale-105 ${
                selected?.name === plan.name
                  ? "border-blue-500 ring-2 ring-blue-300"
                  : "border-gray-200"
              } ${plan.recommended ? "shadow-xl scale-105" : ""}`}
            >
              {plan.recommended && (
                <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {t("recommended")}
                </div>
              )}

              <h2 className="text-2xl font-semibold text-gray-800">
                {plan.name}
              </h2>
              <p className="text-gray-500 mt-2">{plan.desc}</p>

              <div className="mt-6">
                {plan.price === 0 ? (
                  <span className="text-4xl font-bold text-green-600">
                    {t("free")}
                  </span>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-blue-600">
                      {plan.price.toLocaleString("vi-VN")} ₫
                    </span>
                    <span className="text-gray-500 ml-1 text-sm">
                      {t("per_month")}
                    </span>
                  </>
                )}
              </div>

              <ul className="mt-6 text-gray-600 space-y-2 text-left">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelect(plan)}
                className="mt-auto w-full py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              >
                {t("select")}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="relative z-10 mt-24 max-w-6xl w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            {t("compare_title")}
          </h2>
          <table className="w-full border-collapse bg-white rounded-lg shadow overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">{t("feature_col")}</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="py-3 px-4 text-center">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">{t("feature_price")}</td>
                {plans.map((plan) => (
                  <td
                    key={plan.name}
                    className="py-3 px-4 text-center text-blue-600 font-medium"
                  >
                    {plan.price === 0
                      ? t("free")
                      : `${plan.price.toLocaleString("vi-VN")} ₫`}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">{t("feature_ai")}</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-3 px-4 text-center">
                    {plan.features.some((f) => f.toLowerCase().includes("ai"))
                      ? "✅"
                      : "⚪"}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">{t("feature_support")}</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-3 px-4 text-center">
                    {plan.features.find((f) =>
                      f.toLowerCase().includes("support")
                    ) || "—"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">
                  {t("feature_analytics")}
                </td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-3 px-4 text-center">
                    {plan.features.some(
                      (f) =>
                        f.toLowerCase().includes("analytics") ||
                        f.toLowerCase().includes("tracking")
                    )
                      ? "✅"
                      : "⚪"}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Popup Modal */}
        {showPopup && selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">
                {t("confirm_title")}
              </h2>
              <p className="text-gray-600 mb-6">
                {t("confirm_message", {
                  name: selected.name,
                  price:
                    selected.price === 0
                      ? t("free")
                      : `${selected.price.toLocaleString("vi-VN")} ₫`,
                })}
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={handleContinue}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {t("confirm_continue")}
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  {t("confirm_cancel")}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
