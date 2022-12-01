/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: process.env.NEXT_PUBLIC_THEME_COLOR,
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
