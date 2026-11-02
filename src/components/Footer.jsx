import { useEffect, useState } from 'react'
import JcBrand from './JcBrand'

export default function Footer() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 680px)')
    setMobile(mq.matches)
    const handler = (m) => setMobile(m.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div
        className="inner"
        style={{
          paddingBlock: '16px',
          display: 'flex',
          flexDirection: mobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: mobile ? '8px' : '16px',
          fontSize: '12.5px',
          color: 'var(--muted)',
          textAlign: mobile ? 'center' : 'left',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 7px var(--green)', flexShrink: 0 }} />
          main · <JcBrand />
        </span>
        <span>
          © 2026 <JcBrand /> · Jefferson Lindao · Del problema al producto.
        </span>
        {!mobile && (
          <span style={{ color: 'var(--faint)' }}>UTF-8 · LF · Ecuador 🇪🇨</span>
        )}
      </div>
    </footer>
  )
}
