/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#E92577',
          600: '#D61F6B',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}