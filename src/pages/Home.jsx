import Hero from '../sections/Hero.jsx'
import Marquee from '../sections/Marquee.jsx'
import Services from '../sections/Services.jsx'
import WhyUs from '../sections/WhyUs.jsx'
import Gallery from '../sections/Gallery.jsx'
import HorizontalScroll from '../sections/HorizontalScroll.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import CTABanner from '../sections/CTABanner.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <HorizontalScroll />
      <Gallery />
      <Testimonials />
      <CTABanner />
    </main>
  )
}
