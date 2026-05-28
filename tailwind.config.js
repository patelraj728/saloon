/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Inspired by client salon: slate walls, blush peach, warm amber neon, magenta pop
        charcoal: '#140d24',  // rich deep plum
        ink: '#080411',       // deepest grape/midnight violet
        nude: '#ffeedd',      // warm cream-peach
        blush: '#fbcfe8',     // blush pink
        rose: '#ec4899',      // vibrant magenta/rose
        cream: '#faf5ff',     // lavender cream
        warmwhite: '#fff5f5',
        gold: '#f59e0b',      // glowing warm amber
        goldsoft: '#fbbf24',
        violet: '#8b5cf6',    // electric violet
        coral: '#ff6b6b',     // warm coral
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
