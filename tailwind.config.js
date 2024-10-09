/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      'custom-blue': '#2640BA',
      'custom-pink': '#FB6C76',
    },},
  },
  plugins: [],
}

