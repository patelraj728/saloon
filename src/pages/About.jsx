import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SplitText from '../components/SplitText.jsx'
import Reveal from '../components/Reveal.jsx'
import MagneticBtn from '../components/MagneticBtn.jsx'

const team = [
  { n: 'Élise Moreau', r: 'Founder · Creative Director', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&q=85' },
  { n: 'Margaux Vidal', r: 'Lead Coiffeuse', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=85' },
  { n: 'Anaïs Laurent', r: 'Senior Makeup Artist', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=85' },
  { n: 'Camille Roux', r: 'Esthéticienne', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&q=85' },
]

function AboutHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={ref} className="relative min-h-screen pt-40 pb-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative z-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-gold" />
              <span className="text-[11px] tracking-[0.45em] text-gold uppercase">N°00 — The House</span>
            </div>
          </Reveal>
          <SplitText as="h1" className="font-display text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.9] text-cream">
            A house
          </SplitText>
          <SplitText as="h1" delay={0.1} className="font-display text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.9] text-cream italic">
            of small,
          </SplitText>
          <SplitText as="h1" delay={0.2} className="font-display text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.9] text-gradient-purple-pink italic">
            certain things.
          </SplitText>
          <Reveal delay={0.6}>
            <p className="mt-10 max-w-md text-cream/60 leading-relaxed font-light">
              Maison Elle is not a chain, not a concept, not a brand built in a boardroom. It is a single address in the 8e — and the people, hours and silences inside it.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative h-[500px] lg:h-[640px]">
          <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[70%] aspect-[3/4] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&q=85" className="w-full h-full object-cover" alt="" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[55%] aspect-[3/4] overflow-hidden border-8 border-ink">
            <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=85" className="w-full h-full object-cover" alt="" />
          </motion.div>
          <div className="absolute top-1/2 -right-4 font-display italic text-gold text-2xl rotate-90 origin-right opacity-60">est. 2014</div>
        </div>
      </div>
    </section>
  )
}

function Founder() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={ref} className="bg-charcoal py-32 md:py-48 px-6 md:px-12 border-y border-cream/5">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 relative">
          <motion.div style={{ y }} className="aspect-[4/5] overflow-hidden rounded-xl border border-cream/5 shadow-xl">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&q=85" alt="Élise Moreau" className="w-full h-full object-cover transition-transform duration-700 hover:scale-102" />
          </motion.div>
          <div className="absolute -bottom-6 -right-6 bg-ink p-6 border border-gold/30 max-w-[200px]">
            <div className="font-script text-3xl text-gold leading-none">Élise</div>
            <div className="text-[10px] tracking-[0.3em] text-cream/60 mt-2 uppercase">Founder · 2014</div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <div className="text-[11px] tracking-[0.4em] text-gold uppercase mb-6">— The Founder</div>
          </Reveal>
          <SplitText as="h2" className="font-display text-5xl md:text-7xl text-cream leading-[1]">A studio born of</SplitText>
          <SplitText as="h2" delay={0.1} className="font-display text-5xl md:text-7xl text-gradient-gold-rose leading-[1] italic">refusal.</SplitText>

          <Reveal delay={0.3}>
            <p className="mt-10 text-cream/70 leading-[1.85] font-light text-[17px]">
              Élise Moreau spent twelve years inside houses she will not name — fashion week ateliers, couture backstages, a single small room in Tokyo. She returned to Paris with one rule:
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-6 font-serif text-2xl md:text-3xl text-cream italic leading-snug border-l border-gold pl-6">
              "Nothing in this house will be hurried. Not the coffee, not the cut, not the goodbye."
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="mt-6 text-cream/70 leading-[1.85] font-light text-[17px]">
              Eleven years later, the rule still holds. The atelier still receives a single client per chair at a time. The kettle still boils when she arrives.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="mt-10 font-script text-4xl text-gold">— Élise</div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Philosophy() {
  const principles = [
    { n: 'I', t: 'Light, before product', d: 'Every chair faces north. The day chooses the palette before we do.' },
    { n: 'II', t: 'One client, one chair', d: 'Never two appointments concurrent. The room belongs to you for the hour.' },
    { n: 'III', t: 'Tools, not trends', d: 'Scissors forged in Hyogo. Brushes hand-bound in Kyoto. Nothing decorative.' },
    { n: 'IV', t: 'The goodbye matters', d: 'A walk to the door, never a desk. The end of the visit is part of the visit.' },
  ]
  return (
    <section className="bg-ink py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-[11px] tracking-[0.4em] text-gold uppercase mb-6">— House Principles</div>
            </Reveal>
            <SplitText as="h2" className="font-display text-5xl md:text-7xl text-cream leading-[1]">Four rules,</SplitText>
            <SplitText as="h2" delay={0.1} className="font-display text-5xl md:text-7xl text-gradient-purple-pink leading-[1] italic">never broken.</SplitText>
          </div>
          <Reveal delay={0.2} className="md:col-span-6 md:col-start-7">
            <p className="text-cream/65 leading-relaxed font-light">
              They are unglamorous, and that is the point. Every refinement of the experience begins by removing something else.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-cream/10">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1} className="bg-ink p-10 md:p-14 group hover:bg-charcoal transition-colors duration-700">
              <div className="font-display text-gold/70 text-2xl mb-6">{p.n}.</div>
              <h3 className="font-display text-3xl md:text-4xl text-cream mb-4 group-hover:translate-x-2 transition-transform duration-500">{p.t}</h3>
              <p className="text-cream/60 leading-relaxed font-light">{p.d}</p>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }} className="mt-8 w-2 h-2 rounded-full bg-gold/50" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section className="bg-charcoal py-32 md:py-44 px-6 md:px-12 border-y border-cream/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <Reveal><div className="text-[11px] tracking-[0.4em] text-gold uppercase mb-4">— The Atelier</div></Reveal>
          <SplitText as="h2" className="font-display text-5xl md:text-7xl text-cream leading-[1]">Eighteen pairs</SplitText>
          <SplitText as="h2" delay={0.1} className="font-display text-5xl md:text-7xl text-gradient-gold-rose leading-[1] italic">of careful hands.</SplitText>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {team.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.08}>
              <div className="group hover-target cursor-none">
                <div className="aspect-[3/4] overflow-hidden mb-5 relative rounded-lg border border-cream/5">
                  <img src={m.img} alt={m.n} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="font-display text-2xl text-cream group-hover:text-gold transition-colors duration-500">{m.n}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-cream/50 mt-1">{m.r}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Environment() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80])
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="bg-ink py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <Reveal><div className="text-[11px] tracking-[0.4em] text-gold uppercase mb-4">— Inside the Room</div></Reveal>
          <SplitText as="h2" className="font-display text-5xl md:text-7xl text-cream italic">12 Rue de la Lumière.</SplitText>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          <motion.div style={{ y: y1 }} className="aspect-[3/4] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1000&q=85" className="w-full h-full object-cover" alt="" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="aspect-[3/4] overflow-hidden md:mt-20">
            <img src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=1000&q=85" className="w-full h-full object-cover" alt="" />
          </motion.div>
          <motion.div style={{ y: y3 }} className="aspect-[3/4] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522335789203-aaa2f59c1cd8?w=1000&q=85" className="w-full h-full object-cover" alt="" />
          </motion.div>
        </div>

        <Reveal delay={0.3}>
          <p className="text-center max-w-2xl mx-auto mt-20 text-cream/70 leading-relaxed font-serif text-xl italic">
            A nineteenth-century apartment on the second floor. Five rooms. North-facing windows. Linen drapes that move in the morning wind.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-charcoal py-40 md:py-56 px-6 text-center border-t border-cream/5">
      <div className="text-[11px] tracking-[0.4em] text-gold uppercase mb-8">— Welcome</div>
      <SplitText as="h2" className="font-display text-5xl md:text-8xl text-cream leading-[0.95]">Experience</SplitText>
      <SplitText as="h2" delay={0.1} className="font-display text-5xl md:text-8xl text-gradient-purple-pink leading-[0.95] italic">luxury, redefined.</SplitText>
      <div className="mt-12 flex flex-wrap gap-5 justify-center">
        <MagneticBtn>Reserve Your Seat</MagneticBtn>
        <MagneticBtn href="#contact" className="!border-cream/30">Find the Atelier</MagneticBtn>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <main>
      <AboutHero />
      <Founder />
      <Philosophy />
      <Team />
      <Environment />
      <FinalCTA />
    </main>
  )
}
