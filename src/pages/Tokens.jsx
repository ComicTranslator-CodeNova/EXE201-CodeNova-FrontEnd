import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Tokens() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);

  const tokenPackages = [
    { amount: 50, price: 2.99, desc: "Basic package for light usage", height: "h-48" },
    { amount: 100, price: 5.99, desc: "Most popular choice for regular users", height: "h-56" },
    { amount: 500, price: 24.99, desc: "Best value for power users", height: "h-64" },
    { amount: 1000, price: 39.99, desc: "Professional package with premium support", height: "h-72" },
  ];

  const handleContinue = () => {
    if (!selected) return;
    navigate("/payment", { state: { packageId: selected.amount, price: selected.price } });
  };

  return (
    <div className="flex min-h-screen bg-blue-600">
      <Sidebar />

      <main className="flex-1 bg-white p-8 rounded-tl-3xl">
        {/* Header user info */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold uppercase text-gray-900">TOKENS</h2>
            <p className="text-gray-500">
              Purchase Tokens — Select a package to continue...
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{user?.display_name || "Anonymous"}</p>
            <p className="text-gray-500 text-sm">{user?.email || ""}</p>
          </div>
        </div>

        {/* Token packages */}
        <div className="flex gap-6 items-end justify-center mb-8">
          {tokenPackages.map((pkg, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(pkg)}
              className={`flex flex-col justify-between border rounded-2xl shadow transition w-48 p-4 cursor-pointer
                ${pkg.height}
                ${selected?.amount === pkg.amount
                  ? "bg-blue-100 border-blue-600 shadow-lg"
                  : "bg-white border-gray-200 hover:shadow-md"}
              `}
            >
              <div>
                <h3 className="text-xl font-bold mb-1">{pkg.amount} Tokens</h3>
                <p className="text-lg font-semibold text-blue-600 mb-1">
                  ${pkg.price.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500">{pkg.desc}</p>
              </div>
              <button
                className={`mt-4 py-1.5 rounded-full transition
                  ${selected?.amount === pkg.amount
                    ? "bg-blue-700 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"}
                `}
              >
                {selected?.amount === pkg.amount ? "Selected" : "Buy Now"}
              </button>
            </div>
          ))}
        </div>

        {/* Continue payment */}
        {selected && (
          <div className="text-center mt-6">
            <button
              onClick={handleContinue}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
            >
              Continue to Payment
            </button>
            <div
              onClick={() => setSelected(null)}
              className="text-blue-500 text-sm mt-2 cursor-pointer hover:underline"
            >
              Cancel
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
