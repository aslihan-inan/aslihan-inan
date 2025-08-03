import React from "react";
import profileImage from "../assets/aslihan.jpeg"; // Yolunu proje yapına göre ayarla

function Hero({ language = "tr", isDarkMode, setIsDarkMode, setLanguage, translations = {} }) {
  // language geçerli değilse 'tr' kullan
  const currentLang = language in translations ? language : "tr";

  // Çeviri metinlerini al, yoksa boş obje
  const t = translations[currentLang] || {};

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-10 md:py-20 flex flex-col md:flex-row items-center relative max-w-6xl gap-10">
        {/* Üst sağda mod ve dil butonları */}
        <div className="absolute top-4 right-4 flex gap-2 z-50">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-3 py-2 rounded-md bg-gray-700 dark:bg-pink-600 text-white hover:bg-gray-800 dark:hover:bg-pink-700 transition-colors"
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <button
            onClick={() => setLanguage(currentLang === "tr" ? "en" : "tr")}
            className="px-3 py-2 rounded-md bg-gray-700 dark:bg-pink-600 text-white hover:bg-gray-800 dark:hover:bg-pink-700 transition-colors"
          >
            {t.btnText || "Change Language"}
          </button>
        </div>

        {/* Metin alanı */}
        <div className="flex-1 md:pr-12">
          <p className="text-2xl mb-2">{t.greeting || "Merhaba!"}</p>
          <h1 className="text-4xl font-bold mb-6">{t.title || "Hoş geldiniz!"}</h1>
          <p className="text-lg md:text-xl mb-4">{t.description || ""}</p>
          <p className="text-lg md:text-xl mb-6">{t.currentWork || ""}</p>
          <p className="text-lg md:text-xl mb-8">{t.invitation || ""}</p>

          <div className="mt-8">
            <a
              href={`mailto:${t.email || "example@example.com"}`}
              className="inline-block px-6 py-3 bg-gray-700 dark:bg-pink-600 text-white rounded-md hover:bg-gray-800 dark:hover:bg-pink-700 transition-colors"
            >
              → {t.email || "example@example.com"}
            </a>
          </div>
        </div>

        {/* Resim alanı */}
        <div className="flex-1 flex justify-center">
          <img
            src={profileImage}
            alt="Aslıhan Uzunoğulları"
            className="rounded-lg shadow-xl w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover border-8 border-pink-600 dark:border-pink-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
