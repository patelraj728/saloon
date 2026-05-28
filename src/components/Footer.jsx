import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const igImgs = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
  'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400&q=80',
  'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=400&q=80',
  'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80',
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink border-t border-cream/5 pt-24 pb-10 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="text-[10px] tracking-[0.4em] text-gold/70 mb-6">— FOLLOW THE ATELIER</div>
            <h3 className="font-serif text-4xl md:text-5xl text-cream leading-[1.05] mb-8">
              Where rituals<br/><em className="text-gold/80 font-light">become memory.</em>
            </h3>
            <div className="grid grid-cols-3 gap-2 max-w-md">
              {igImgs.map((src, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.04 }} className="aspect-square overflow-hidden block hover-target">
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] tracking-[0.4em] text-cream/40 mb-5">NAVIGATE</div>
            <ul className="space-y-3 font-serif text-xl text-cream/85">
              <li><Link to="/" className="link-underline">Home</Link></li>
              <li><Link to="/about" className="link-underline">About</Link></li>
              <li><a href="#services" className="link-underline">Services</a></li>
              <li><a href="#" className="link-underline">Journal</a></li>
              <li><a href="#" className="link-underline">Reserve</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] tracking-[0.4em] text-cream/40 mb-5">HOURS</div>
            <ul className="space-y-2 text-sm text-cream/70 leading-relaxed">
              <li>Tue — Fri<br/><span className="text-cream">10:00 — 20:00</span></li>
              <li className="pt-2">Saturday<br/><span className="text-cream">09:00 — 18:00</span></li>
              <li className="pt-2">Sunday & Mon<br/><span className="text-cream/40">By appointment</span></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-[0.4em] text-cream/40 mb-5">VISIT</div>
            <p className="text-cream/70 leading-relaxed text-sm">
              12 Rue de la Lumière<br/>
              75008 Paris, France<br/><br/>
              <a href="mailto:reserve@maisonelle.fr" className="text-cream link-underline">reserve@maisonelle.fr</a><br/>
              <a href="tel:+33142000000" className="text-cream/80">+33 1 42 00 00 00</a>
            </p>
            <div className="flex gap-5 mt-8 text-[11px] tracking-[0.25em] uppercase text-cream/60">
              <a href="#" className="link-underline hover:text-gold">IG</a>
              <a href="#" className="link-underline hover:text-gold">FB</a>
              <a href="#" className="link-underline hover:text-gold">PIN</a>
              <a href="#" className="link-underline hover:text-gold">TT</a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-cream/40">
          <div>© {new Date().getFullYear()} Maison Elle · Crafted in Paris</div>
          <div className="flex gap-8">
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Imprint</a>
            <a href="#" className="link-underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
