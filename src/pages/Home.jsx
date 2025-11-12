import Header from "../components/Header";
import { Link } from "react-router-dom";
import codenova2 from "../assets/codenova2.mp4";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
     const [showVideo, setShowVideo] = useState(false);
     const { t, i18n } = useTranslation("home");

  // 🔁 Hàm đổi ngôn ngữ
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };
     
  return (
    <div className="w-full">
      <Header />  {/* 👈 Thêm header */}
      
      {/* 🔘 Nút chuyển ngữ (toàn cục) */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="bg-gray-900/60 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition"
        >
          {/* 👇 hiển thị ngôn ngữ bạn sẽ CHUYỂN SANG */}
          {i18n.language === "en" ? "🇺🇸 English" : "🇻🇳 Tiếng Việt"}
        </button>
      </div>
      
{/* Section hero */}
      <section
        id="hero"
        className="relative text-white min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/background_hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            {t("hero_title")}
          </h1>
            <p className="mt-2 text-lg max-w-2xl">{t("hero_sub")}</p>
        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
            {t("hero_btn")}
          </button>
          {/* Nút Watch Demo */}
          <button 
            onClick={() => setShowVideo(true)}
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black"
          >
            ▶ {t("hero_watch")}
          </button>

      {/* Video Popup */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white text-4xl"
            >
              ✕
            </button>
            <video className="w-full rounded" controls autoPlay>
              <source src={codenova2} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
          </div>
        </div>
      </section>

{/* --- How It Works Section --- */}
      <section id="how" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t("hiw_title")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {t("hiw_desc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-md">
            <div className="text-5xl mb-4">🧩</div>
            <h3 className="text-xl font-semibold mb-2">{t("hiw_step1_title")}</h3>
            <p>{t("hiw_step1_desc")}</p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-md">
            <div className="text-5xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-2">{t("hiw_step2_title")}</h3>
            <p>{t("hiw_step2_desc")}</p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-md">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">{t("hiw_step3_title")}</h3>
            <p>{t("hiw_step3_desc")}</p>
          </div>
        </div>
      </section>


{/* --- Features Section --- */}
<section id="features" className="py-16 bg-blue-600 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">{t("feature_title")}</h2>
  <p className="max-w-2xl mx-auto mb-12 text-blue-100">
    {t("feature_desc")}
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    {/* Feature 1 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">⚡</div>
      <h3 className="text-lg font-semibold mb-2">{t("feature1_title")}</h3>
      <p className="text-gray-600">{t("feature1_desc")}</p>
    </div>

    {/* Feature 2 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">🌐</div>
      <h3 className="text-lg font-semibold mb-2">{t("feature2_title")}</h3>
      <p className="text-gray-600">{t("feature2_desc")}</p>
    </div>

    {/* Feature 3 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">🛠️</div>
      <h3 className="text-lg font-semibold mb-2">{t("feature3_title")}</h3>
      <p className="text-gray-600">{t("feature3_desc")}</p>
    </div>

    {/* Feature 4 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">✍️</div>
      <h3 className="text-lg font-semibold mb-2">{t("feature4_title")}</h3>
      <p className="text-gray-600">{t("feature4_desc")}</p>
    </div>

    {/* Feature 5 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">💾</div>
      <h3 className="text-lg font-semibold mb-2">{t("feature5_title")}</h3>
      <p className="text-gray-600">{t("feature5_desc")}</p>
    </div>

    {/* Feature 6 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">🔒</div>
      <h3 className="text-lg font-semibold mb-2">{t("feature6_title")}</h3>
      <p className="text-gray-600">{t("feature6_desc")}</p>
    </div>
  </div>
</section>


{/* --- Pricing Section --- */}
<section id="pricing" className="py-20 bg-blue-500 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">{t("pricing_title")}</h2>
  <p className="max-w-2xl mx-auto mb-12 text-blue-100">
    {t("pricing_desc")}
  </p>

  {/* Unlimited Plans */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-4">
    {/* Daily Pass */}
    <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{t("pricing_daily_title")}</h3>
      <p className="text-gray-500 mb-4">{t("pricing_daily_sub")}</p>
      <p className="text-4xl font-bold text-blue-600 mb-4">{t("pricing_daily_price")}</p>
      <ul className="text-gray-700 text-sm mb-6 space-y-2">
        {t("pricing_daily_features", { returnObjects: true }).map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        {t("pricing_select_btn")}
      </button>
    </div>

    {/* Monthly Pass */}
    <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-blue-400 hover:shadow-xl transition">
      <span className="bg-green-200 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
        {t("pricing_monthly_popular")}
      </span>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{t("pricing_monthly_title")}</h3>
      <p className="text-gray-500 mb-4">{t("pricing_monthly_sub")}</p>
      <p className="text-4xl font-bold text-blue-600 mb-4">{t("pricing_monthly_price")}</p>
      <ul className="text-gray-700 text-sm mb-6 space-y-2">
        {t("pricing_monthly_features", { returnObjects: true }).map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        {t("pricing_select_btn")}
      </button>
    </div>
  </div>

  {/* Nút More */}
  <div className="mt-10">
    <Link
      to="/pricing"
      className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition"
    >
      {t("pricing_more_btn")} <span className="ml-2">↗</span>
    </Link>
  </div>
</section>

{/* --- Testimonials Section --- */}
<section id="testimonials" className="py-20 bg-white text-center">
  <h2 className="text-3xl font-bold mb-4 text-black">{t("testi_title")}</h2>
  <p className="max-w-2xl mx-auto mb-12 text-gray-600">{t("testi_desc")}</p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
    {/* Testimonial 1 */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-4">
        <img src="https://i.pravatar.cc/60?img=1" alt="user" className="w-12 h-12 rounded-full" />
        <div className="text-left">
          <h3 className="font-bold">{t("testi_1_name")}</h3>
          <p className="text-sm text-gray-500">{t("testi_1_role")}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-sm">{t("testi_1_quote")}</p>
      <div className="flex justify-center">
        <span className="text-yellow-400 text-xl">★ ★ ★ ★ ★</span>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-4">
        <img src="https://i.pravatar.cc/60?img=2" alt="user" className="w-12 h-12 rounded-full" />
        <div className="text-left">
          <h3 className="font-bold">{t("testi_2_name")}</h3>
          <p className="text-sm text-gray-500">{t("testi_2_role")}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-sm">{t("testi_2_quote")}</p>
      <div className="flex justify-center">
        <span className="text-yellow-400 text-xl">★ ★ ★ ★ ★</span>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-4">
        <img src="https://i.pravatar.cc/60?img=3" alt="user" className="w-12 h-12 rounded-full" />
        <div className="text-left">
          <h3 className="font-bold">{t("testi_3_name")}</h3>
          <p className="text-sm text-gray-500">{t("testi_3_role")}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-sm">{t("testi_3_quote")}</p>
      <div className="flex justify-center">
        <span className="text-yellow-400 text-xl">★ ★ ★ ★ ★</span>
      </div>
    </div>

    {/* Testimonial 4 */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-4">
        <img src="https://i.pravatar.cc/60?img=4" alt="user" className="w-12 h-12 rounded-full" />
        <div className="text-left">
          <h3 className="font-bold">{t("testi_4_name")}</h3>
          <p className="text-sm text-gray-500">{t("testi_4_role")}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-sm">{t("testi_4_quote")}</p>
      <div className="flex justify-center">
        <span className="text-yellow-400 text-xl">★ ★ ★ ★ ★</span>
      </div>
    </div>
  </div>

  {/* Carousel buttons (placeholder) */}
  <div className="flex justify-center mt-10 gap-4">
    <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition">◀</button>
    <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition">▶</button>
  </div>
</section>


{/* --- FAQ Section --- */}
<section id="faq" className="py-20 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold mb-6">{t("faq_title")}</h2>
  <p className="max-w-2xl mx-auto text-gray-600 mb-12">{t("faq_desc")}</p>

  <div className="max-w-3xl mx-auto space-y-4 text-left">
    {/* FAQ Item 1 */}
    <details className="bg-white p-5 rounded-lg shadow-sm">
      <summary className="cursor-pointer text-lg font-medium text-gray-800">
        {t("faq_1_q")}
      </summary>
      <p className="mt-2 text-gray-600">{t("faq_1_a")}</p>
    </details>

    {/* FAQ Item 2 */}
    <details className="bg-white p-5 rounded-lg shadow-sm">
      <summary className="cursor-pointer text-lg font-medium text-gray-800">
        {t("faq_2_q")}
      </summary>
      <p className="mt-2 text-gray-600">{t("faq_2_a")}</p>
    </details>

    {/* FAQ Item 3 */}
    <details className="bg-white p-5 rounded-lg shadow-sm">
      <summary className="cursor-pointer text-lg font-medium text-gray-800">
        {t("faq_3_q")}
      </summary>
      <p className="mt-2 text-gray-600">{t("faq_3_a")}</p>
    </details>

    {/* FAQ Item 4 */}
    <details className="bg-white p-5 rounded-lg shadow-sm">
      <summary className="cursor-pointer text-lg font-medium text-gray-800">
        {t("faq_4_q")}
      </summary>
      <p className="mt-2 text-gray-600">{t("faq_4_a")}</p>
    </details>

    {/* FAQ Item 5 */}
    <details className="bg-white p-5 rounded-lg shadow-sm">
      <summary className="cursor-pointer text-lg font-medium text-gray-800">
        {t("faq_5_q")}
      </summary>
      <p className="mt-2 text-gray-600">{t("faq_5_a")}</p>
    </details>
  </div>
</section>


{/* --- Footer --- */}
<footer className="bg-gray-900 text-gray-300 py-10">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Logo & Description */}
    <div>
      <h3 className="text-white text-2xl font-bold mb-2">{t("footer_brand")}</h3>
      <p className="text-sm text-gray-400">{t("footer_desc")}</p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-white font-semibold mb-3">{t("footer_links_title")}</h4>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="#features" className="hover:text-white transition">{t("footer_link_features")}</a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-white transition">{t("footer_link_pricing")}</a>
        </li>
        <li>
          <a href="#faq" className="hover:text-white transition">{t("footer_link_faq")}</a>
        </li>
        <li>
          <a href="/login" className="hover:text-white transition">{t("footer_link_login")}</a>
        </li>
        <li>
          <a href="/register" className="hover:text-white transition">{t("footer_link_register")}</a>
        </li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h4 className="text-white font-semibold mb-3">{t("footer_social_title")}</h4>
      <div className="flex gap-4">
        <a href="#" className="hover:text-white transition">🌐</a>
        <a href="#" className="hover:text-white transition">🐦</a>
        <a href="#" className="hover:text-white transition">📘</a>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} {t("footer_brand")}. {t("footer_rights")}
      </p>
    </div>
  </div>
</footer>

</div>
);
}
