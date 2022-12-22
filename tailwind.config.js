/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e64e41',
        light: '#ffffff',
        secondary: '#fcfcfc',
        transparent: 'transparent',
      },
      screens: {
        sm: '367px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
