import JcBrand from './JcBrand'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div className="inner" style={{ paddingBlock: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', fontSize: '12.5px', color: 'var(--muted)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 7px var(--green)', flexShrink: 0 }} />
          main · <JcBrand />
        </span>
        <span style={{ textAlign: 'center' }}>
          © 2026 <JcBrand /> · Jefferson Lindao · Del problema al producto.
        </span>
        <span style={{ color: 'var(--faint)' }}>UTF-8 · LF · Ecuador 🇪🇨</span>
      </div>
    </footer>
  )
}
