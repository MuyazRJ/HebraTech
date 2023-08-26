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
        },
        wiggle: {
          '0%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(4px)' },
          '100%': { transform: 'translateX(-4px)' },
        },
      },
      animation: {
        infiniteScroll: 'infiniteScroll 13s linear infinite',
        wiggle: 'wiggle 0.18s 2',
      },
      screens: {
        '3xl': '1720px',
      }
    },
  },
  plugins: [],
}
