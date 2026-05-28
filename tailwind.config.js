/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Inspired by client salon: slate walls, blush peach, warm amber neon, magenta pop
        charcoal: '#23272f',
        ink: '#171a20',
        nude: '#f0d4c2',
        blush: '#ecbcaa',
        rose: '#e07a8e',      // magenta neon accent (from interior signage)
        cream: '#f7ece1',
        warmwhite: '#fdf6ee',
        gold: '#d49860',      // warm amber neon
        goldsoft: '#e8b88a',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Italiana"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Allura"', 'cursive'],
      },
    },
  },
  plugins: [],
}
