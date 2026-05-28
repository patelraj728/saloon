import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SplitText from '../components/SplitText.jsx'
import Reveal from '../components/Reveal.jsx'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  useEffect(() => {
    if (!inView || !ref.current) return
    const dur = 2200, start = performance.now()
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      if (ref.current) ref.current.textContent = Math.floor(e * to).toLocaleString() + suffix
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, suffix])
  return <span ref={ref}>0{suffix}</span>
}

export default function WhyUs() {
  return (
    <section className="bg-charcoal py-32 md:py-44 px-6 md:px-12 border-y border-cream/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-violet/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-gold" />
                <span className="text-[11px] tracking-[0.4em] text-gold uppercase">N°03 — La Maison</span>
              </div>
            </Reveal>
            <SplitText as="h2" className="font-display text-5xl md:text-7xl text-cream leading-[1]">
              A quiet
            </SplitText>
            <SplitText as="h2" delay={0.1} className="font-display text-5xl md:text-7xl text-gradient-gold-rose leading-[1] italic">
              kind of luxury.
            </SplitText>
          </div>
          <Reveal delay={0.2} className="md:col-span-6 md:col-start-7">
            <p className="text-cream/65 leading-relaxed text-lg font-light">
              We do not chase trends. We refine what is essential — light, touch, time —
              so that the result is unmistakably yours and quietly remembered.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-1 md:grid-rows-3 gap-4 md:gap-5 md:h-[640px]">
          <Reveal className="md:col-span-3 md:row-span-2 bg-ink/60 backdrop-blur-md p-10 flex flex-col justify-between border border-violet/20 group overflow-hidden relative rounded-xl">
            <img src="https://images.unsplash.com/photo-1522335789203-aaa2f59c1cd8?w=1200&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000" />
            <div className="relative z-10">
              <div className="text-[10px] tracking-[0.4em] text-gold mb-3">— FOUNDED</div>
              <div className="font-display text-7xl md:text-8xl text-cream"><Counter to={2014} /></div>
            </div>
            <div className="relative z-10">
              <h3 className="font-serif text-3xl text-cream mb-2">A decade of devotion</h3>
              <p className="text-cream/70 text-sm max-w-xs">Ten years rendering small, daily perfections in a single house.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3 bg-gradient-to-br from-violet to-rose text-cream p-8 flex flex-col justify-between border border-cream/15 rounded-xl shadow-lg shadow-violet/10">
            <div>
              <div className="text-[10px] tracking-[0.4em] text-gold mb-3">— ARTISANS</div>
              <div className="font-display text-7xl text-cream"><Counter to={18} /></div>
            </div>
            <p className="text-cream/90 text-sm font-medium">Specialists, never generalists. Each trained for at least seven years.</p>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2 bg-charcoal/50 backdrop-blur-md p-8 border border-cream/10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="text-[10px] tracking-[0.4em] text-gold/70 mb-3">— BRIDES</div>
              <div className="font-display text-6xl text-gradient-gold-rose"><Counter to={420} suffix="+" /></div>
            </div>
            <p className="text-cream/65 text-xs">Mornings carefully composed across three continents.</p>
          </Reveal>

          <Reveal delay={0.3} className="md:col-span-2 bg-gradient-to-br from-rose to-coral text-cream p-8 border border-cream/15 rounded-xl shadow-lg shadow-rose/10 flex flex-col justify-between">
            <div>
              <div className="text-[10px] tracking-[0.4em] text-cream/80 mb-3">— RITUAL</div>
              <div className="font-display text-2xl leading-tight">No phone. No rush. <em>Only ritual.</em></div>
            </div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-cream/75">House rule N°01</span>
          </Reveal>

          <Reveal delay={0.4} className="md:col-span-2 bg-charcoal/50 backdrop-blur-md p-8 border border-cream/10 rounded-xl flex flex-col justify-between">
            <div>
              <div className="text-[10px] tracking-[0.4em] text-gold/70 mb-3">— PRESS</div>
              <div className="font-serif text-rose text-lg italic leading-snug">"A near-religious quiet."</div>
            </div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-cream/50">Vogue Paris, 2024</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
