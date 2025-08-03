export default function Projects({ language }) {
  const projects = [
    {
      id: 1,
      title: language === "tr" ? "Pizza Sipariş" : "Pizza Order",
      description:
        language === "tr"
          ? "Çoklu malzeme seçilebilen pizza sipariş formu."
          : "Pizza order form with multiple ingredient selection.",
      tags: ["react", "vercel", "axios", "router"],
      imgSrc: "/images/project1.png",
      alt: "Proje 1",
    },
    {
      id: 2,
      title: language === "tr" ? "Portfolyo" : "Portfolio",
      description:
        language === "tr"
          ? "Kişisel bilgi ve yeteneklerin yer aldığı bir sayfa."
          : "A page showcasing personal info and skills.",
      tags: ["react", "redux", "axios", "router", "vercel"],
      imgSrc: "/images/project2.png",
      alt: "Proje 2",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({ id, title, description, tags, imgSrc, alt }) => (
            <div
              key={id}
              className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-blue-600 dark:text-pink-400">
                  <a href="#" className="hover:underline">
                    {language === "tr" ? "GitHub'da Görüntüle" : "View on GitHub"}
                  </a>
                  <a href="#" className="hover:underline flex items-center gap-1">
                    {language === "tr" ? "Uygulamaya Git →" : "Go to app →"}
                  </a>
                </div>
              </div>
              <img
                src={imgSrc}
                alt={alt}
                className="mt-6 rounded-md shadow-lg w-full max-w-[500px] h-auto object-cover mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
