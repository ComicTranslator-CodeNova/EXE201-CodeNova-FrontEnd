import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


// Header cho khách chưa đăng nhập
function HeaderPublic() {
  const { t } = useTranslation("pricing");
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/80 text-white">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        {t("app_name")}
      </Link>
      <nav className="flex items-center gap-6">
        <Link to="/login" className="hover:text-blue-400 transition">
          {t("header_login")}
        </Link>
        <Link to="/register" className="hover:text-blue-400 transition">
          {t("header_register")}
        </Link>
      </nav>
    </header>
  );
}

const Check = () => <span className="text-blue-600 font-bold">✔</span>;
const Dash = () => <span className="text-gray-300">—</span>;

export default function Pricing() {
  const { t } = useTranslation("pricing");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <HeaderPublic />

      <main className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-wide">
          {t("title")}
        </h1>

        {/* ====== 3 gói ====== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Free */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t("free_title")}</h3>
            <p className="text-gray-500 mb-4">{t("free_desc")}</p>
            <p className="text-5xl font-extrabold text-blue-600 mb-4">{t("free_price")}</p>
            <ul className="text-gray-700 text-sm mb-6 space-y-2 text-left inline-block">
              {t("free_features", { returnObjects: true }).map((f, i) => (
                <li key={i}>
                  <Check /> <span className="ml-2">{f}</span>
                </li>
              ))}
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              {t("free_btn")}
            </button>
          </div>

          {/* Plus */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-4 border-blue-400 hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t("plus_title")}</h3>
            <p className="text-gray-500 mb-4">{t("plus_desc")}</p>
            <p className="text-5xl font-extrabold text-blue-600 mb-1">{t("plus_price")}</p>
            <p className="text-gray-600 -mt-2 mb-3">{t("plus_month")}</p>
            <ul className="text-gray-700 text-sm mb-6 space-y-2 text-left inline-block">
              {t("plus_features", { returnObjects: true }).map((f, i) => (
                <li key={i}>
                  <Check /> <span className="ml-2">{f}</span>
                </li>
              ))}
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              {t("plus_btn")}
            </button>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t("pro_title")}</h3>
            <p className="text-gray-500 mb-4">{t("pro_desc")}</p>
            <p className="text-5xl font-extrabold text-blue-600 mb-1">{t("pro_price")}</p>
            <p className="text-gray-600 -mt-2 mb-3">{t("pro_month")}</p>
            <ul className="text-gray-700 text-sm mb-6 space-y-2 text-left inline-block">
              {t("pro_features", { returnObjects: true }).map((f, i) => (
                <li key={i}>
                  <Check /> <span className="ml-2">{f}</span>
                </li>
              ))}
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              {t("pro_btn")}
            </button>
          </div>
        </div>

        {/* ====== Compare Plans ====== */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
          {t("compare_title")}
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          {t("compare_subtitle")}
        </p>

        {(() => {
          const planCols = [
            t("plan_free"),
            t("plan_plus"),
            t("plan_pro"),
            t("plan_enterprise")
          ];

          const features = t("features_table", { returnObjects: true });

          // Ma trận cố định đúng như ảnh chuẩn
          const matrix = [
            [true,  true,  true,  true],  // Basic token usage
            [true,  true,  true,  true],  // Standard support
            [true,  true,  true,  true],  // 5 projects
            [false, true,  true,  true],  // Advanced analytics
            [false, false, true,  true],  // Custom integrations
            [false, false, true,  true],  // Unlimited projects
            [false, false, true,  true],  // Priority support
            [false, false, false, true]   // Custom branding
          ];

          return (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-100 text-gray-800">
                    <tr>
                      <th className="p-4 w-1/3">{t("compare_feature")}</th>
                      {planCols.map((name, idx) => (
                        <th
                          key={idx}
                          className={`p-4 text-center ${name === t("plan_pro") ? "bg-blue-50" : ""}`}
                        >
                          {name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((label, rowIdx) => (
                      <tr
                        key={label}
                        className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="p-4 text-gray-800">{label}</td>
                        {matrix[rowIdx].map((has, colIdx) => (
                          <td
                            key={`${rowIdx}-${colIdx}`}
                            className={`p-4 text-center ${
                              planCols[colIdx] === t("plan_pro") ? "bg-blue-50" : ""
                            }`}
                          >
                            {has ? <Check /> : <Dash />}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })()}

        {/* ====== Actions ====== */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            {t("actions_pay")}
          </button>
          <Link
            to="/"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition"
          >
            {t("actions_back")}
          </Link>
        </div>
      </main>
    </div>
  );
}
