import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => { setOpen(false) }, [loc.pathname])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-ink/85 backdrop-blur-md border-b border-cream/5' : 'py-6 md:py-8'}`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="hover-target">
          <div className="font-display text-2xl md:text-3xl tracking-[0.15em] text-cream">
            MAISON<span className="text-gold">·</span>ELLE
          </div>
          <div className="text-[10px] tracking-[0.4em] text-cream/50 mt-0.5">ATELIER DE BEAUTÉ</div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.3em] uppercase text-cream/80">
          <Link to="/" className="link-underline hover:text-cream transition">Home</Link>
          <Link to="/about" className="link-underline hover:text-cream transition">About</Link>
          <a href="#services" className="link-underline hover:text-cream transition">Services</a>
          <a href="#contact" className="link-underline hover:text-cream transition">Journal</a>
        </nav>

        <Link to="/" className="hidden md:inline-block magnetic-btn light text-cream">
          Reserve <span>→</span>
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden text-cream relative w-8 h-8 flex flex-col justify-center items-end gap-1.5">
          <span className={`block h-px bg-cream transition-all ${open ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`block h-px bg-cream transition-all ${open ? 'w-6 -rotate-45 -translate-y-0' : 'w-4'}`} />
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-ink/95 backdrop-blur-xl border-t border-cream/5 mt-4">
          <div className="px-6 py-10 flex flex-col gap-6 font-serif text-3xl text-cream">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a className="magnetic-btn light inline-flex w-fit text-cream mt-4">Reserve</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
