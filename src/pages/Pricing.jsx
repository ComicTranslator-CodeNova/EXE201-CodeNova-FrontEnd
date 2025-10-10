// src/pages/Pricing.jsx
import React from "react";
import { Link } from "react-router-dom";

// Header cho khách chưa đăng nhập
function HeaderPublic() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/80 text-white">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        ComicTranslator
      </Link>
      <nav className="flex items-center gap-6">
        <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
        <Link to="/register" className="hover:text-blue-400 transition">Register</Link>
      </nav>
    </header>
  );
}

// Dấu check/blank
const Check = () => <span className="text-blue-600 font-bold">✔</span>;
const Dash  = () => <span className="text-gray-300">—</span>;

// Dữ liệu bảng so sánh
const plans = ["Free", "Plus", "Pro", "Enterprise"];
const rows = [
  { feature: "Basic token usage",      Free: true,  Plus: true,  Pro: true,  Enterprise: true },
  { feature: "Standard support",       Free: true,  Plus: true,  Pro: true,  Enterprise: true },
  { feature: "5 projects",             Free: true,  Plus: true,  Pro: true,  Enterprise: true },
  { feature: "Advanced analytics",     Free: false, Plus: true,  Pro: true,  Enterprise: true },
  { feature: "Custom integrations",    Free: false, Plus: false, Pro: true,  Enterprise: true },
  { feature: "Unlimited projects",     Free: false, Plus: false, Pro: true,  Enterprise: true },
  { feature: "Priority support",       Free: false, Plus: false, Pro: true,  Enterprise: true },
  { feature: "Custom branding",        Free: false, Plus: false, Pro: false, Enterprise: true },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <HeaderPublic />

      <main className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-wide">
          SUBSCRIPTION PLANS
        </h1>

        {/* ====== 3 gói ====== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Free */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Free</h3>
            <p className="text-gray-500 mb-4">Perfect for getting started with basic features</p>
            <p className="text-5xl font-extrabold text-blue-600 mb-4">Free</p>
            <ul className="text-gray-700 text-sm mb-6 space-y-2 text-left inline-block">
              <li><Check /> <span className="ml-2">Basic support</span></li>
              <li><Check /> <span className="ml-2">5 chapters per day</span></li>
              <li><Check /> <span className="ml-2">Standard speed</span></li>
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Choose Free
            </button>
          </div>

          {/* Plus */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-4 border-blue-400 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Plus</h3>
            <p className="text-gray-500 mb-4">Ideal for professionals and growing teams</p>
            <p className="text-5xl font-extrabold text-blue-600 mb-1">$2.99</p>
            <p className="text-gray-600 -mt-2 mb-3">/month</p>
            <ul className="text-gray-700 text-sm mb-6 space-y-2 text-left inline-block">
              <li><Check /> <span className="ml-2">Plus support (AI recommend)</span></li>
              <li><Check /> <span className="ml-2">20 chapters per day</span></li>
              <li><Check /> <span className="ml-2">Offline mode</span></li>
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Subscribe Plus
            </button>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pro</h3>
            <p className="text-gray-500 mb-4">For organizations with advanced needs</p>
            <p className="text-5xl font-extrabold text-blue-600 mb-1">$7.99</p>
            <p className="text-gray-600 -mt-2 mb-3">/month</p>
            <ul className="text-gray-700 text-sm mb-6 space-y-2 text-left inline-block">
              <li><Check /> <span className="ml-2">Premium supports (Priority first)</span></li>
              <li><Check /> <span className="ml-2">Unlimited chapters</span></li>
              <li><Check /> <span className="ml-2">Dev mode</span></li>
              <li><Check /> <span className="ml-2">Offline mode</span></li>
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Contact Sales
            </button>
          </div>
        </div>

        {/* ====== Compare Plans ====== */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Compare Plans</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          All plans include 24/7 support and 30-day money-back guarantee.
        </p>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="p-4 w-1/3">Feature</th>
                  {plans.map((p) => (
                    <th
                      key={p}
                      className={`p-4 text-center ${p === "Pro" ? "bg-blue-50" : ""}`}
                    >
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr key={r.feature} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-800">{r.feature}</td>
                    {plans.map((p) => (
                      <td
                        key={p}
                        className={`p-4 text-center ${p === "Pro" ? "bg-blue-50" : ""}`}
                      >
                        {r[p] ? <Check /> : <Dash />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ====== Actions ====== */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Continue to Payment
          </button>
          <Link
            to="/"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition"
          >
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
