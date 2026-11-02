import { useEffect, useState } from 'react'
import JcBrand from './JcBrand'

export default function Nav() {
  const [showEdu, setShowEdu] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 760px)')
    setShowEdu(mq.matches)
    const handler = (m) => setShowEdu(m.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(10,14,18,.88)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="inner" style={{ height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '13px', minWidth: 0 }}>
          <span style={{ display: 'flex', gap: '7px', flexShrink: 0 }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--red)' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--amber)' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--green)' }} />
          </span>
          <JcBrand style={{ fontSize: '15px', fontWeight: 700 }} />
        </a>
        <nav style={{ display: 'flex', gap: '2px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <a href="#about"      className="nav-link">./sobre-mi</a>
          <a href="#skills"     className="nav-link">./skills</a>
          <a href="#projects"   className="nav-link">./proyectos</a>
          <a href="#experience" className="nav-link">./experiencia</a>
          {showEdu && <a href="#education" className="nav-link">./educacion</a>}
          <a href="#contact"    className="nav-cta">./contacto</a>
        </nav>
      </div>
    </header>
  )
}
