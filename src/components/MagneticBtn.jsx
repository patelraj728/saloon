import { useRef } from 'react'

export default function MagneticBtn({ children, dark = false, className = '', as: Tag = 'a', ...props }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
  }
  const onLeave = () => { ref.current.style.transform = 'translate(0,0)' }
  return (
    <Tag
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className={`magnetic-btn ${dark ? 'dark text-ink' : 'light text-cream'} ${className}`}
      style={{ transition: 'transform 0.4s cubic-bezier(.2,.8,.2,1), color 0.4s ease' }}
      {...props}
    >
      {children}
    </Tag>
  )
}
