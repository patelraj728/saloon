import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SplitText from '../components/SplitText.jsx'

const items = [
  { q: "Three hours felt like ten minutes. I left looking like myself, only quieter and more certain.", a: 'Isabelle R.', role: 'Editor · Vogue' },
  { q: "I have been to every studio in the arrondissement. None compose a morning like Maison Elle.", a: 'Camille D.', role: 'Bride · June 2025' },
  { q: "The atelier breathes. Nothing is hurried. Everything is exactly where it should be.", a: 'Léa M.', role: 'Architect' },
  { q: "It is the small, unrepeatable details — a curl, a brushstroke, a pause — that make a face memorable.", a: 'Sofia A.', role: 'Cinematographer' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % items.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="bg-charcoal py-32 md:py-44 px-6 md:px-12 relative overflow-hidden border-y border-cream/5">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-rose/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="text-[11px] tracking-[0.4em] text-gold uppercase mb-4">— N°06 · The Guestbook</div>
          <SplitText as="h2" className="font-display text-4xl md:text-6xl text-cream italic">Words from the chair.</SplitText>
        </div>

        <div className="relative h-[280px] md:h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.7,0,.2,1] }}
              className="text-center"
            >
              <div className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream leading-[1.3] italic font-light">
                &ldquo;{items[i].q}&rdquo;
              </div>
              <div className="mt-10 flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-gold" />
                <div className="text-cream">
                  <div className="font-display text-xl">{items[i].a}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-cream/50 mt-1">{items[i].role}</div>
                </div>
                <span className="w-8 h-px bg-gold" />
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {items.map((_, k) => (
            <button key={k} onClick={() => setI(k)} className={`h-px transition-all duration-500 hover-target ${k === i ? 'w-12 bg-gold' : 'w-6 bg-cream/30'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
