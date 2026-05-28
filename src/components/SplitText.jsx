import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function SplitText({ children, className = '', delay = 0, stagger = 0.04, y = 60, trigger = true, as: Tag = 'h1' }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const words = ref.current.querySelectorAll('.split-word')
    const config = { y, opacity: 0, rotateX: 30, duration: 1.1, ease: 'expo.out', stagger, delay }
    const anim = trigger
      ? gsap.from(words, { ...config, scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true } })
      : gsap.from(words, config)
    return () => anim.kill()
  }, [delay, stagger, y, trigger])

  const text = typeof children === 'string' ? children : ''
  return (
    <Tag ref={ref} className={className} style={{ perspective: 1000 }}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 mr-[0.25em]">
          <span className="split-word inline-block" dangerouslySetInnerHTML={{ __html: w }} />
        </span>
      ))}
    </Tag>
  )
}
