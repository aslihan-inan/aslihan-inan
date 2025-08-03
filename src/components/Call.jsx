export default function CallToAction({ lang }) {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 text-center mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6">
          {lang === "tr"
            ? "Bir sonraki projenizde "
            : "Let’s work together on your next project."}
          {lang === "tr" && (
            <span className="text-blue-600 dark:text-pink-500 font-bold">
              birlikte çalışalım
            </span>
          )}
        </h3>
        <div className="flex flex-wrap justify-center gap-6 text-lg sm:text-xl">
          <a
            href="https://github.com/aslihan-inan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-pink-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-gray-800 dark:text-gray-200 hover:underline"
          >
            {lang === "tr" ? "Kişisel Blog" : "Personal Blog"}
          </a>
          <a
            href="https://www.linkedin.com/in/asl%C4%B1han-inan-555a15147/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:a.uzunogullari@gmail.com"
            className="text-pink-600 hover:underline"
          >
            {lang === "tr" ? "E-posta" : "Email"}
          </a>
        </div>
      </div>
    </section>
  );
}
