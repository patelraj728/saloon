# Maison Elle — Luxe Salon Atelier

A premium, handcrafted Beauty & Salon website (Home + About) built with React, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scroll.

## Features

- Cinematic GSAP split-text hero animation
- Lenis-powered smooth scrolling
- Custom magnetic cursor with hover targeting
- Horizontal scroll lookbook
- Parallax bento gallery & layered About hero
- Animated counters, marquees, page transitions
- Fully responsive (mobile · tablet · desktop)
- Dark luxury palette with nude/blush/gold accents
- Cormorant Garamond + Italiana + Allura + Inter typography

## Getting Started

Requirements: **Node.js 18+** and **npm** (or pnpm / yarn / bun).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:5173

# 3. Build for production
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   # Cursor, Navbar, Footer, SplitText, Reveal, MagneticBtn, PageTransition
  sections/     # Hero, Marquee, Services, WhyUs, HorizontalScroll, Gallery, Testimonials, CTABanner
  pages/        # Home, About
  styles/       # index.css (Tailwind + custom utilities)
  App.jsx       # Router + Lenis smooth scroll
  main.jsx      # Entry point
```

## Routes

- `/` — Home
- `/about` — About

## Notes

- All images load from Unsplash for placeholders — swap with your own brand photography in `src/sections/*`.
- Custom cursor disables on mobile (<768 px) and falls back to native pointer.
- Animations are GPU-accelerated and respect reduced-motion best practices.

Enjoy. ✦
