import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SplitText from '../components/SplitText.jsx'
import MagneticBtn from '../components/MagneticBtn.jsx'

export default function Hero() {
  const ref = useRef(null)
  const glowRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 200])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])
  const scale = useTransform(scrollY, [0, 800], [1, 1.15])

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return
      glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=2000&q=85" alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/10 to-ink" />
      </motion.div>

      {/* Glowing background colorful blobs */}
      <div ref={glowRef} className="hidden md:block pointer-events-none absolute top-0 left-0 w-[550px] h-[550px] rounded-full bg-violet/20 blur-[130px] transition-transform duration-300" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-rose/20 blur-[130px] hidden md:block" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gold/15 blur-[110px] hidden md:block" />

      {/* Floating decorative elements */}
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-12 md:right-32 w-32 h-32 border border-violet/30 rounded-full hidden md:block" />
      <motion.div animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-44 left-12 md:left-40 w-20 h-20 border border-rose/40 hidden md:block" />

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
          className="flex items-center gap-3 mb-8">
          <span className="w-12 h-px bg-gold" />
          <span className="text-[11px] tracking-[0.45em] text-gold uppercase">Est. Paris · 2014</span>
        </motion.div>

        <SplitText as="h1" className="font-display text-[14vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.95] text-cream tracking-tight">
          Beauty,
        </SplitText>
        <SplitText as="h1" delay={0.15} className="font-display text-[14vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.95] text-gradient-gold-rose tracking-tight italic">
          unhurried.
        </SplitText>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 1 }}
          className="mt-10 max-w-md text-cream/65 leading-relaxed text-[15px] font-light">
          An atelier where every gesture is considered, every detail intentional.
          Hair, skin and ceremony — composed by hand.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9, duration: 1 }}
          className="mt-12 flex flex-wrap gap-5">
          <MagneticBtn>Book Appointment</MagneticBtn>
          <MagneticBtn href="#services" className="!border-cream/30 hover:!border-cream">Explore Services</MagneticBtn>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-cream/50">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-px h-10 bg-gradient-to-b from-cream/60 to-transparent" />
      </motion.div>

      <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 text-[10px] tracking-[0.4em] text-cream/40 uppercase [writing-mode:vertical-rl] rotate-180">
        N°01 — The Atelier
      </div>
    </section>
  )
}
