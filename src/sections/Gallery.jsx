import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SplitText from '../components/SplitText.jsx'
import Reveal from '../components/Reveal.jsx'

const imgs = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80', h: 'h-[420px]' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80', h: 'h-[560px]' },
  { src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=900&q=80', h: 'h-[360px]' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80', h: 'h-[500px]' },
  { src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=900&q=80', h: 'h-[460px]' },
  { src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&q=80', h: 'h-[380px]' },
]

function ParallaxImg({ src, h, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  return (
    <motion.div ref={ref} className={`relative overflow-hidden group ${h}`}>
      <motion.div initial={{ scale: 1.3 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.7,0,.2,1] }} className="absolute inset-0">
        <motion.img style={{ y }} src={src} alt="" loading="lazy" className="w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105" />
      </motion.div>
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
      <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] text-cream/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">N°{String(i+1).padStart(2,'0')}</div>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section className="bg-ink py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-gold" />
                <span className="text-[11px] tracking-[0.4em] text-gold uppercase">N°05 — La Galerie</span>
              </div>
            </Reveal>
            <SplitText as="h2" className="font-display text-5xl md:text-7xl text-cream leading-[1]">Quiet</SplitText>
            <SplitText as="h2" delay={0.1} className="font-display text-5xl md:text-7xl text-cream leading-[1] italic">moments.</SplitText>
          </div>
          <Reveal delay={0.2}><a href="#" className="link-underline text-[11px] tracking-[0.3em] uppercase text-cream/80">View Full Archive →</a></Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="space-y-4 md:space-y-6">
            <ParallaxImg src={imgs[0].src} h={imgs[0].h} i={0} />
            <ParallaxImg src={imgs[3].src} h={imgs[3].h} i={3} />
          </div>
          <div className="space-y-4 md:space-y-6 md:mt-16">
            <ParallaxImg src={imgs[1].src} h={imgs[1].h} i={1} />
            <ParallaxImg src={imgs[4].src} h={imgs[4].h} i={4} />
          </div>
          <div className="space-y-4 md:space-y-6 md:mt-32">
            <ParallaxImg src={imgs[2].src} h={imgs[2].h} i={2} />
            <ParallaxImg src={imgs[5].src} h={imgs[5].h} i={5} />
          </div>
        </div>
      </div>
    </section>
  )
}
