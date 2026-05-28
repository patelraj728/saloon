import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SplitText from '../components/SplitText.jsx'
import Reveal from '../components/Reveal.jsx'

const imgs = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80', h: 'h-[300px] sm:h-[350px] md:h-[420px]' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80', h: 'h-[350px] sm:h-[450px] md:h-[560px]' },
  { src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=900&q=80', h: 'h-[280px] sm:h-[320px] md:h-[360px]' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80', h: 'h-[320px] sm:h-[400px] md:h-[500px]' },
  { src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=900&q=80', h: 'h-[300px] sm:h-[380px] md:h-[460px]' },
  { src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&q=80', h: 'h-[280px] sm:h-[320px] md:h-[380px]' },
]

function ParallaxImg({ src, h, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  return (
    <motion.div ref={ref} className={`relative overflow-hidden rounded-xl border border-cream/5 group ${h}`}>
      <motion.div initial={{ scale: 1.2 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.7,0,.2,1] }} className="absolute inset-0">
        <motion.img style={{ y }} src={src} alt="" loading="lazy" className="w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105" />
      </motion.div>
      {/* Colorful glow overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-rose/25 via-transparent to-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-500" />
      <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] text-cream bg-charcoal/80 px-3 py-1 rounded-full border border-cream/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">N°{String(i+1).padStart(2,'0')}</div>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section className="bg-ink py-24 md:py-36 px-6 md:px-12 relative overflow-hidden">
      {/* Background colorful ambient glow */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] rounded-full bg-rose/10 blur-[130px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-gold" />
                <span className="text-[11px] tracking-[0.4em] text-gold uppercase">N°05 — La Galerie</span>
              </div>
            </Reveal>
            <SplitText as="h2" className="font-display text-5xl md:text-7xl text-cream leading-[1]">Quiet</SplitText>
            <SplitText as="h2" delay={0.1} className="font-display text-5xl md:text-7xl text-gradient-gold-rose leading-[1] italic">moments.</SplitText>
          </div>
          <Reveal delay={0.2}>
            <a href="#" className="link-underline text-[11px] tracking-[0.3em] uppercase text-cream/80 hover:text-gold transition-colors duration-300">View Full Archive →</a>
          </Reveal>
        </div>

        {/* Fully responsive, properly aligned grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imgs.map((img, idx) => (
            // Add subtle offsets to grid columns on larger screens for that luxury masonry feel
            <div key={idx} className={`space-y-6 ${
              idx === 1 ? 'lg:mt-12' : 
              idx === 4 ? 'lg:mt-12' :
              idx === 2 ? 'lg:mt-24' :
              idx === 5 ? 'lg:mt-24' : ''
            }`}>
              <ParallaxImg src={img.src} h={img.h} i={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
