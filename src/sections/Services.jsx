import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SplitText from '../components/SplitText.jsx'
import Reveal from '../components/Reveal.jsx'

const services = [
  { no: '01', name: 'Hair Styling', tag: 'Cut · Color · Treatment', desc: 'Architectural cuts and balayage tailored to the geometry of your face.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=85' },
  { no: '02', name: 'Makeup', tag: 'Editorial · Bridal · Day', desc: 'A skin-first approach. Luminous, weightless, unmistakably you.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=85' },
  { no: '03', name: 'Nail Atelier', tag: 'Manicure · Pedicure · Art', desc: 'Quiet luxury in lacquer. A studied ritual for hand and foot.', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85' },
  { no: '04', name: 'Skin Care', tag: 'Facial · Peel · Massage', desc: 'Bespoke facials drawing on French pharmacy and Japanese ritual.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85' },
  { no: '05', name: 'Bridal', tag: 'The wedding ceremony', desc: 'A choreography of trials, fittings and the morning itself.', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85' },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-ink py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-8">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-gold" />
                <span className="text-[11px] tracking-[0.4em] text-gold uppercase">Le Menu — N°02</span>
              </div>
            </Reveal>
            <SplitText as="h2" className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-cream">
              Services
            </SplitText>
            <SplitText as="h2" delay={0.1} className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-gradient-purple-pink italic">
              composed.
            </SplitText>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-cream/60 leading-relaxed font-light">
              Five disciplines, each performed by a specialist trained for years in their craft.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* List */}
          <div className="lg:col-span-7 border-t border-cream/10">
            {services.map((s, i) => (
              <motion.div
                key={s.no}
                onMouseEnter={() => setActive(i)}
                className="border-b border-cream/10 py-8 md:py-12 cursor-none group flex items-baseline gap-6 md:gap-10 hover-target"
                whileHover="hover"
              >
                <span className="font-display text-xl md:text-2xl text-gold/70">{s.no}</span>
                <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
                  <motion.h3
                    variants={{ hover: { x: 20, color: '#ec4899' } }}
                    transition={{ duration: 0.5, ease: [0.7,0,.2,1] }}
                    className="font-display text-4xl md:text-6xl lg:text-7xl text-cream"
                  >
                    {s.name}
                  </motion.h3>
                  <span className="text-[11px] tracking-[0.3em] uppercase text-cream/40">{s.tag}</span>
                </div>
                <motion.span variants={{ hover: { x: 8, opacity: 1 } }} className="text-rose opacity-50 text-2xl">→</motion.span>
              </motion.div>
            ))}
          </div>

          {/* Preview */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-32 aspect-[3/4] relative overflow-hidden bg-charcoal">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={services[active].img}
                  alt={services[active].name}
                  initial={{ scale: 1.15, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: [0.7,0,.2,1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <AnimatePresence mode="wait">
                  <motion.div key={active}
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}>
                    <div className="text-[10px] tracking-[0.4em] text-gold mb-2">{services[active].tag}</div>
                    <h4 className="font-display text-3xl text-cream mb-3">{services[active].name}</h4>
                    <p className="text-cream/70 text-sm leading-relaxed">{services[active].desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
