export default function Skills({ language }) {
  const skills = [
    { src: "/images/js.jpg", alt: "JavaScript", labelTr: "JAVASCRİPT", labelEn: "JAVASCRIPT" },
    { src: "/images/react.png", alt: "React", labelTr: "REACT", labelEn: "REACT" },
    { src: "/images/redux.png", alt: "Redux", labelTr: "REDUX", labelEn: "REDUX" },
    { src: "/images/node.jpg", alt: "Node.js", labelTr: "NODE", labelEn: "NODE" },
    { src: "/images/vs.png", alt: "VS Code", labelTr: "VS CODE", labelEn: "VS CODE" },
    { src: "/images/figma.jpg", alt: "Figma", labelTr: "FİGMA", labelEn: "FIGMA" },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-16 rounded-lg my-8 shadow-md">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          {language === "tr" ? "Yeteneklerim" : "My Skills"}
        </h2>
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-8
            sm:gap-12
            overflow-x-auto
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
            dark:scrollbar-thumb-pink-600 dark:scrollbar-track-gray-900
            py-4
            -mx-4
            sm:mx-0
            px-4
            sm:px-0
          "
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {skills.map(({ src, alt, labelTr, labelEn }) => (
            <div
              key={alt}
              className="flex flex-col items-center min-w-[100px] sm:min-w-[120px]"
            >
              <img
                src={src}
                alt={alt}
                className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-md object-cover shadow-md"
              />
              <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-200 text-center">
                {language === "tr" ? labelTr : labelEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
