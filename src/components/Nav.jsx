import { useEffect, useState } from 'react'
import JcBrand from './JcBrand'

const links = [
  { href: '#about',      label: './sobre-mi' },
  { href: '#skills',     label: './skills' },
  { href: '#projects',   label: './proyectos' },
  { href: '#experience', label: './experiencia' },
  { href: '#education',  label: './educacion' },
  { href: '#contact',    label: './contacto', cta: true },
]

export default function Nav() {
  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 680px)')
    setMobile(mq.matches)
    const handler = (m) => { setMobile(m.matches); if (!m.matches) setOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const close = () => setOpen(false)

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(10,14,18,.95)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="inner" style={{ height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>

        {/* Logo */}
        <a href="#hero" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '13px', minWidth: 0 }}>
          <span style={{ display: 'flex', gap: '7px', flexShrink: 0 }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--red)' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--amber)' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--green)' }} />
          </span>
          <JcBrand style={{ fontSize: '15px', fontWeight: 700 }} />
        </a>

        {/* Desktop nav */}
        {!mobile && (
          <nav style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} className={l.cta ? 'nav-cta' : 'nav-link'}>{l.label}</a>
            ))}
          </nav>
        )}

        {/* Mobile: hamburguesa */}
        {mobile && (
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            style={{
              background: 'none', border: '1px solid var(--border)', borderRadius: '8px',
              color: 'var(--text)', cursor: 'pointer', padding: '6px 11px',
              fontSize: '17px', lineHeight: 1, fontFamily: 'var(--mono)',
              flexShrink: 0,
            }}
          >
            {open ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {mobile && open && (
        <div style={{
          borderTop: '1px solid var(--border)',
          background: 'rgba(10,14,18,.98)',
          paddingBottom: '12px',
        }}>
          <div className="inner" style={{ display: 'flex', flexDirection: 'column', paddingBlock: '8px 4px' }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                style={{
                  display: 'block', padding: '12px 10px',
                  color: l.cta ? 'var(--green)' : 'var(--text)',
                  fontSize: '14px', fontFamily: 'var(--mono)',
                  borderBottom: '1px solid var(--border)',
                  fontWeight: l.cta ? 700 : 400,
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
