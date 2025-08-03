import ThemeLanguage from "./components/ThemeLanguage";
import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "tr");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div>
      <ThemeLanguage language={language} setLanguage={setLanguage} />
      {/* diğer componentler */}
    </div>
  );
}
