import React, { createContext, useState, useEffect } from 'react';

export const ThemeLanguageContext = createContext();

export const ThemeLanguageProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'tr';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <ThemeLanguageContext.Provider 
      value={{ isDarkMode, toggleTheme, language, toggleLanguage }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
};