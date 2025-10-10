import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      <Header />  {/* 👈 Thêm header */}
      {/* Hero */}
      <section
        id="hero"
        className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center pt-24"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-center">
          TRANSLATE COMICS INSTANTLY IN YOUR LANGUAGE
        </h1>
        <p className="text-center mt-4 text-lg max-w-2xl">
          No downloads. No hassle. ComicTranslator brings every panel to life in your tongue.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
            Translating magic...
          </button>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black">
            ▶ Watch Demo
          </button>
        </div>
      </section>

      {/* --- How It Works Section --- */}
      <section id="how" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          HOW COMICTRANSLATOR WORKS
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our extension makes translating comics and manga simple and fast.
          Just follow these three easy steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-md">
            <div className="text-5xl mb-4">🧩</div>
            <h3 className="text-xl font-semibold mb-2">Install Extension</h3>
            <p>Add to your browser in one click.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-md">
            <div className="text-5xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-2">Open Comic</h3>
            <p>Load any comic or manga page.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-md">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Translate Instantly</h3>
            <p>Get text overlays in seconds.</p>
          </div>
        </div>
      </section>

    {/* --- Features Section --- */}
<section id="features" className="py-16 bg-blue-600 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">
    POWERFUL FEATURES FOR COMIC LOVERS
  </h2>
  <p className="max-w-2xl mx-auto mb-12 text-blue-100">
    Our extension makes translating comics and manga simple and fast.
    Just follow these three easy steps.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    {/* Feature 1 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">⚡</div>
      <h3 className="text-lg font-semibold mb-2">Instant OCR & Translation</h3>
      <p className="text-gray-600">
        Automatically detect and translate text from any comic or manga image in seconds.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">🌐</div>
      <h3 className="text-lg font-semibold mb-2">Multi-Language Support</h3>
      <p className="text-gray-600">
        Translate between Japanese, Chinese, Korean, English, Vietnamese and more.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">🛠️</div>
      <h3 className="text-lg font-semibold mb-2">Overlay Edit & Copy Tools</h3>
      <p className="text-gray-600">
        Easily edit translations or copy text directly from the comic panels.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">✍️</div>
      <h3 className="text-lg font-semibold mb-2">Font Style Matching</h3>
      <p className="text-gray-600">
        Automatically match the original font style for a seamless reading experience.
      </p>
    </div>

    {/* Feature 5 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">💾</div>
      <h3 className="text-lg font-semibold mb-2">Translation History & Export</h3>
      <p className="text-gray-600">
        Save your translation history and export it for future reference.
      </p>
    </div>

    {/* Feature 6 */}
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">🔒</div>
      <h3 className="text-lg font-semibold mb-2">Privacy-First</h3>
      <p className="text-gray-600">
        Your data stays on your device. We don’t store or share your comic images.
      </p>
    </div>
  </div>
</section>

{/* --- Pricing Section --- */}
<section id="pricing" className="py-20 bg-blue-500 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">CHOOSE YOUR PLAN</h2>
  <p className="max-w-2xl mx-auto mb-12 text-blue-100">
    Select the option that works best for you, whether you need unlimited access or prefer to pay as you go.
  </p>

  {/* Unlimited Plans */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-4">
    {/* Daily Pass */}
    <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2 text-gray-800">Daily Pass</h3>
      <p className="text-gray-500 mb-4">Perfect for occasional translations</p>
      <p className="text-4xl font-bold text-blue-600 mb-4">$0.99 <span className="text-base font-medium">/day</span></p>
      <ul className="text-gray-700 text-sm mb-6 space-y-2">
        <li>✅ Unlimited pages for 24 hours</li>
        <li>✅ All languages supported</li>
        <li>✅ Basic font matching</li>
        <li>❌ No history saving</li>
      </ul>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Select Plan</button>
    </div>

    {/* Monthly Pass */}
    <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-blue-400 hover:shadow-xl transition">
      <span className="bg-green-200 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-2">Most Popular</span>
      <h3 className="text-xl font-bold mb-2 text-gray-800">Monthly Pass</h3>
      <p className="text-gray-500 mb-4">Unlimited translations, all features</p>
      <p className="text-4xl font-bold text-blue-600 mb-4">$4.99 <span className="text-base font-medium">/month</span></p>
      <ul className="text-gray-700 text-sm mb-6 space-y-2">
        <li>✅ Unlimited pages</li>
        <li>✅ All languages supported</li>
        <li>✅ Advanced font matching</li>
        <li>✅ Full history & export</li>
        <li>✅ Priority support</li>
      </ul>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Select Plan</button>
    </div>
  </div>

  {/* Token Packs */}
  <h3 className="text-2xl font-bold mb-8">Token Packs</h3>
  <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
    {/* 100 Tokens */}
    <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition">
      <p className="text-lg font-bold mb-2">100 Tokens</p>
      <p className="text-2xl font-bold text-blue-600 mb-2">$1.99</p>
      <p className="text-sm text-gray-500 mb-4">$0.0199 per token</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Purchase</button>
    </div>

    {/* 500 Tokens */}
    <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border-4 border-green-400 hover:shadow-xl transition">
      <span className="bg-green-200 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-2">Best Value</span>
      <p className="text-lg font-bold mb-2">500 Tokens</p>
      <p className="text-2xl font-bold text-blue-600 mb-2">$7.99</p>
      <p className="text-sm text-gray-500 mb-4">$0.0159 per token</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Purchase</button>
    </div>

    {/* 1000 Tokens */}
    <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition">
      <p className="text-lg font-bold mb-2">1000 Tokens</p>
      <p className="text-2xl font-bold text-blue-600 mb-2">$12.99</p>
      <p className="text-sm text-gray-500 mb-4">$0.0129 per token</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Purchase</button>
    </div>
  </div>

  <p className="text-sm text-blue-200 mt-6">1 comic page = 1 token</p>

  {/* Nút More */}
  <div className="mt-10">
    <Link
      to="/pricing"
      className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition"
    >
      More <span className="ml-2">↗</span>
    </Link>
  </div>
</section>

{/* --- Testimonials Section --- */}
<section id="testimonials" className="py-20 bg-white text-center">
  <h2 className="text-3xl font-bold mb-4">WHAT OUR READERS SAY</h2>
  <p className="max-w-2xl mx-auto mb-12 text-gray-600">
    Join thousands of satisfied users who are enjoying comics and manga in their own language.
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
    {/* Testimonial Card */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://i.pravatar.cc/60?img=1"
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div className="text-left">
          <h3 className="font-bold">Alex Johnson</h3>
          <p className="text-sm text-gray-500">Manga Enthusiast</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-sm">
        ComicTranslator has completely changed how I read manga! I can now enjoy
        titles that haven’t been officially translated yet. The translation
        quality is impressive and the interface is super intuitive.
      </p>
      <div className="flex justify-center">
        <span className="text-yellow-400 text-xl">★ ★ ★ ★ ★</span>
      </div>
    </div>

    {/* Another Testimonial */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://i.pravatar.cc/60?img=2"
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div className="text-left">
          <h3 className="font-bold">Sarah Lee</h3>
          <p className="text-sm text-gray-500">Comic Artist</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-sm">
        I use ComicTranslator for all my projects — it’s fast, accurate, and
        lets me check how my comics look in multiple languages without hassle.
      </p>
      <div className="flex justify-center">
        <span className="text-yellow-400 text-xl">★ ★ ★ ★ ★</span>
      </div>
    </div>

    {/* Another Testimonial */}
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://i.pravatar.cc/60?img=3"
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div className="text-left">
          <h3 className="font-bold">David Kim</h3>
          <p className="text-sm text-gray-500">Anime Fan</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-sm">
        Love the simplicity! Just upload or open my manga and boom — I can read
        everything in my language instantly. Totally worth it.
      </p>
      <div className="flex justify-center">
        <span className="text-yellow-400 text-xl">★ ★ ★ ★ ★</span>
      </div>
    </div>
  </div>

  {/* Carousel buttons (tạm thời chưa hoạt động) */}
  <div className="flex justify-center mt-10 gap-4">
    <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition">◀</button>
    <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition">▶</button>
  </div>
</section>

{/* --- FAQ Section --- */}
<section id="faq" className="py-20 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
  <p className="max-w-2xl mx-auto text-gray-600 mb-12">
    Have questions? We’ve got answers about ComicTranslator.
  </p>

  <div className="max-w-3xl mx-auto space-y-4 text-left">
    {/* FAQ Item 1 */}
    <details className="bg-white p-5 rounded-lg shadow-sm">
      <summary className="cursor-pointer text-lg font-medium text-gray-800">
        How does ComicTranslator work?
      </summary>
      <p className="mt-2 text-gray-600">
        ComicTranslator scans your comic images, extracts text using OCR, then translates it into your selected language. The translated text is displayed directly over the original panels.
      </p>
    </details>

    {/* FAQ Item 2 */}
    <details className="bg-white p-5 rounded-lg shadow-sm">
      <summary className="cursor-pointer text-lg font-medium text-gray-800">
        Do I need to download any software?
      </summary>
      <p className="mt-2 text-gray-600">
        No, ComicTranslator works directly in your browser via a simple extension. Just add it to Chrome and you’re ready to go.
      </p>
    </details>

    {/* FAQ Item 3 */}
    <details className="bg-white p-5 rounded-lg shadow-sm">
      <summary className="cursor-pointer text-lg font-medium text-gray-800">
        Which languages are supported?
      </summary>
      <p className="mt-2 text-gray-600">
        We currently support Japanese, Chinese, Korean, English, Vietnamese, and more are coming soon.
      </p>
    </details>

    {/* FAQ Item 4 */}
    <details className="bg-white p-5 rounded-lg shadow-sm">
      <summary className="cursor-pointer text-lg font-medium text-gray-800">
        How much does it cost?
      </summary>
      <p className="mt-2 text-gray-600">
        You can purchase a Daily or Monthly pass for unlimited usage, or buy tokens for pay-as-you-go access.
      </p>
    </details>

    {/* FAQ Item 5 */}
    <details className="bg-white p-5 rounded-lg shadow-sm">
      <summary className="cursor-pointer text-lg font-medium text-gray-800">
        Is my data private?
      </summary>
      <p className="mt-2 text-gray-600">
        Absolutely. All comic images are processed locally in your browser; we do not store or share your data.
      </p>
    </details>
  </div>
</section>

{/* --- Footer --- */}
<footer className="bg-gray-900 text-gray-300 py-10">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Logo & Description */}
    <div>
      <h3 className="text-white text-2xl font-bold mb-2">ComicTranslator</h3>
      <p className="text-sm text-gray-400">
        Instantly translate comics and manga into your language. Simple, fast, and privacy-friendly.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-white font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="#features" className="hover:text-white transition">Features</a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </li>
        <li>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </li>
        <li>
          <a href="/login" className="hover:text-white transition">Login</a>
        </li>
        <li>
          <a href="/register" className="hover:text-white transition">Register</a>
        </li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h4 className="text-white font-semibold mb-3">Follow Us</h4>
      <div className="flex gap-4">
        <a href="#" className="hover:text-white transition">🌐</a>
        <a href="#" className="hover:text-white transition">🐦</a>
        <a href="#" className="hover:text-white transition">📘</a>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} ComicTranslator. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}
