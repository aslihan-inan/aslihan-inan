export default function Profile() {
  // Burada language sabit, dil seçimi yok
  const language = "tr"; // "tr" veya "en" olarak değiştir

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          {language === "tr" ? "Profil" : "Profile"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Temel Bilgiler Kartı */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-pink-600 text-xl font-semibold mb-4">
              {language === "tr" ? "Temel Bilgiler" : "Basic Information"}
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li className="flex justify-between">
                <span className="font-medium">
                  {language === "tr" ? "Doğum Tarihi:" : "Date of Birth:"}
                </span>
                <span>26.01.1992</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">
                  {language === "tr" ? "İkamet Şehri:" : "City:"}
                </span>
                <span>İzmir</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">
                  {language === "tr" ? "Eğitim Durumu:" : "Education:"}
                </span>
                <span>Gazi Üniversitesi, Grafik Tasarım (Lisans, 2014)</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">
                  {language === "tr" ? "Tercih Ettiği Rol:" : "Preferred Role:"}
                </span>
                <span>Frontend, UI</span>
              </li>
            </ul>
          </div>

          {/* Hakkımda Bölümü */}
          <div>
            <h3 className="text-blue-600 text-xl font-semibold mb-4">
              {language === "tr" ? "Hakkımda" : "About Me"}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {language === "tr"
                ? "Merhaba! Ben Aslıhan. Grafik tasarım geçmişim ve yazılım bilgimle, kullanıcı dostu ve estetik web projeleri geliştiriyorum. React ve modern frontend teknolojilerine odaklanarak, yaratıcı ve etkili çözümler üretiyorum."
                : "Hi! I'm Aslıhan. With my background in graphic design and software development, I build user-friendly and visually appealing web projects. I focus on React and modern frontend technologies to deliver creative and effective solutions."}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {language === "tr"
                ? "Şu anda freelance olarak UX, UI ve web tasarım projeleri yürütüyorum ve sürekli olarak yeni teknolojiler öğrenmeye devam ediyorum."
                : "Currently, I work freelance on UX, UI, and web design projects while continuously learning new technologies."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
