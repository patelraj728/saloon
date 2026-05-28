const items = ['Coiffure', '✦', 'Maquillage', '✦', 'Soin', '✦', 'Manucure', '✦', 'Mariée', '✦', 'Rituel', '✦']

export default function Marquee() {
  return (
    <section className="border-y border-cream/10 py-8 overflow-hidden bg-ink">
      <div className="marquee">
        <div className="marquee-inner">
          {[...items, ...items, ...items, ...items].map((it, i) => (
            <span key={i} className="font-display text-4xl md:text-6xl text-cream/70 italic mx-10 whitespace-nowrap">{it}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
