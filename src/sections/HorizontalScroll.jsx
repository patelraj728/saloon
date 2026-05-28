import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const slides = [
  { t: 'Maquillage de Soirée', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=85', no: 'I' },
  { t: 'Coiffure Architecturale', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=85', no: 'II' },
  { t: 'Le Soin du Visage', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1400&q=85', no: 'III' },
  { t: 'Manucure Atelier', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1400&q=85', no: 'IV' },
  { t: 'Cérémonie Nuptiale', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85', no: 'V' },
]

export default function HorizontalScroll() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-78%'])

  return (
    <section ref={ref} className="relative h-[400vh] bg-ink">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 md:px-12 mb-10">
          <div className="text-[11px] tracking-[0.4em] text-gold uppercase mb-2">— N°04 · Atelier Diary</div>
          <h2 className="font-display text-4xl md:text-6xl text-cream italic">Look book.</h2>
        </div>
        <motion.div style={{ x }} className="flex gap-6 md:gap-10 will-change-transform">
          {slides.map((s, i) => (
            <div key={i} className="relative shrink-0 w-[80vw] md:w-[58vw] lg:w-[42vw] aspect-[4/5] overflow-hidden group">
              <img src={s.img} alt={s.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.4em] text-gold mb-2">CHAPTER {s.no}</div>
                  <h3 className="font-display text-2xl md:text-4xl text-cream">{s.t}</h3>
                </div>
                <span className="text-cream/60 text-sm font-serif italic">2025</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
