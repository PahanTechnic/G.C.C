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
      ],
      screens: {
        'xs': '275px',      // Extra Extra Small - very small phones (e.g. older Androids)
        'sm': '576px',      // Small - standard phones
        'md': '768px',      // Medium - tablets
        'lg': '992px',      // Large - small laptops
        'xl': '1200px',     // Extra Large - desktops
        '2xl': '1400px'     // 2XL - large monitors
      }

    },
  },
  plugins: [],
}