/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sinhala: ['"Yaldevi"', 'sans-serif'],
      },
      safelist: [
        'bg-white',
        'bg-opacity-50',
        'hover:bg-opacity-100',
        'bg-green-400',
        'active-dot'
      ]

    },
  },
  plugins: [],
}