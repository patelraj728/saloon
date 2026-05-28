import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SplitText from '../components/SplitText.jsx'
import MagneticBtn from '../components/MagneticBtn.jsx'

export default function CTABanner() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <section ref={ref} className="relative py-40 md:py-56 overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=2000&q=85" alt="" className="w-full h-[130%] object-cover opacity-30" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="text-[11px] tracking-[0.4em] text-gold uppercase mb-8">— Take Your Seat</div>
        <SplitText as="h2" className="font-display text-6xl md:text-8xl lg:text-9xl text-cream leading-[0.95]">
          A morning,
        </SplitText>
        <SplitText as="h2" delay={0.1} className="font-display text-6xl md:text-8xl lg:text-9xl text-cream leading-[0.95] italic text-blush">
          composed for you.
        </SplitText>
        <p className="mt-10 text-cream/65 max-w-xl mx-auto font-light leading-relaxed">
          Reservations open one season ahead. The house keeps fewer chairs than most — by design.
        </p>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <MagneticBtn>Reserve Your Seat</MagneticBtn>
          <MagneticBtn href="#contact" className="!border-cream/30">Visit the Atelier</MagneticBtn>
        </div>
      </div>
    </section>
  )
}
