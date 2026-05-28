import { motion } from 'framer-motion'

const slides = [
  { t: 'Maquillage de Soirée', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=85', no: 'I', desc: 'Sultry evening look tailored to soft candlelight.' },
  { t: 'Coiffure Architecturale', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=85', no: 'II', desc: 'Precision styling matching face geometry.' },
  { t: 'Le Soin du Visage', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1400&q=85', no: 'III', desc: 'French pharmacy cleansing and Japanese massage.' },
  { t: 'Manucure Atelier', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1400&q=85', no: 'IV', desc: 'Studied hand and foot care rituals in clean lacquer.' },
  { t: 'Cérémonie Nuptiale', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85', no: 'V', desc: 'Full custom trials and day-of wedding styling.' },
]

export default function HorizontalScroll() {
  return (
    <section className="relative bg-ink py-24 md:py-36 px-6 md:px-12 overflow-hidden">
      {/* Colorful background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-rose/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gold" />
              <span className="text-[11px] tracking-[0.4em] text-gold uppercase">N°04 · Atelier Diary</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-cream leading-tight">
              Look book <span className="text-gradient-purple-pink italic">diary.</span>
            </h2>
          </div>
          <p className="max-w-md text-cream/60 font-light leading-relaxed text-sm md:text-base">
            A visual record of our creations. Hair, makeup, and ceremonies captured in natural northern light.
          </p>
        </div>

        {/* Responsive, staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {slides.map((s, i) => {
            // Apply a staggered column span to make the layout look premium and irregular (avoiding boring grid)
            const cardSpan = i === 0 || i === 3 ? 'lg:col-span-2' : 'lg:col-span-1'
            const aspectClass = i === 0 || i === 3 ? 'aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/9]' : 'aspect-[4/5]'

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className={`relative overflow-hidden rounded-xl border border-cream/10 bg-charcoal/40 backdrop-blur-md group ${cardSpan}`}
              >
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden ${aspectClass}`}>
                  <img
                    src={s.img}
                    alt={s.t}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark to transparent overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-80" />
                  
                  {/* Colorful overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet/40 via-rose/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>

                {/* Content Overlay/Details */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-[0.4em] text-gold font-semibold bg-ink/60 px-3 py-1 rounded-full backdrop-blur-sm border border-gold/20 uppercase">
                      CHAPTER {s.no}
                    </span>
                    <span className="text-cream/50 text-xs font-serif italic">Atelier Paris</span>
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-2xl md:text-3xl text-cream mb-2">
                      {s.t}
                    </h3>
                    <p className="text-cream/70 text-xs md:text-sm max-w-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {s.desc}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-cream/40 text-[10px] tracking-[0.3em] uppercase">Maison Elle © 2025</span>
                      <span className="text-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explore →</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
