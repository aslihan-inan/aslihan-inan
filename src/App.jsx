import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Call from "./components/Call"; 
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('tr');

  const translations = {
    tr: {
      greeting: "Merhaba! 👋",
      title: "Ben Aslıhan. Frontend developerım.",
      description: "Sağlam ve ölçeklenebilir frontend ürünleri tasarlıyorum.",
      currentWork: "Şu anda UX, UI ve Web Tasarım projelerinde freelance çalışıyorum.",
      invitation: "Takımınıza katılmamı ister misiniz?",
      email: "a.uzunogullari@gmail.com",
      btnText: "TR/EN"
    },
    en: {
      greeting: "Hello! 👋",
      title: "I'm Aslıhan. I'm a frontend developer.",
      description: "I design solid and scalable frontend products.",
      currentWork: "Currently working freelance on UX, UI and Web Design projects.",
      invitation: "Would you like me to join your team?",
      email: "a.uzunogullari@gmail.com",
      btnText: "EN/TR"
    }
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <Hero
        language={language}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        setLanguage={setLanguage}
        translations={translations}
      />
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Skills language={language} />
          <Profile language={language} />
          <Projects language={language} />
          <Call lang={language} />  
        </div>
      </section>
    </div>
  );
}

export default App;
