/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-black': '#191919',
        'main-gold': '#FFB800'
      },
      keyframes: {
        infiniteScroll: {
          '0%': {  transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(calc(-100% - 1rem))' },
        }
      },
      animation: {
        infiniteScroll: 'infiniteScroll 13s linear infinite'
      }
    },
  },
  plugins: [],
}
