import JcBrand from './JcBrand'

export default function Contact() {
  return (
    <section id="contact" style={{ scrollMarginTop: '54px', paddingBlock: '60px 80px' }}>
      <div className="inner">
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: 'clamp(28px,5vw,52px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(transparent 0 5px, rgba(63,185,80,.025) 5px 6px)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ color: 'var(--faint)', fontSize: '13px', marginBottom: '8px' }}>// 06</div>
            <h2 style={{ fontSize: 'clamp(24px,4vw,38px)', margin: '0 0 10px', fontWeight: 800, color: '#fff', letterSpacing: '-1px', textWrap: 'balance' }}>
              ¿Construimos algo juntos?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 30px', maxWidth: '520px', lineHeight: 1.7 }}>
              <span style={{ color: 'var(--green)' }}>$</span> echo "Abierto a nuevos proyectos y colaboraciones bajo <JcBrand />."
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '14px', maxWidth: '900px' }}>
              <a
                href="mailto:hola@jeffercode.com"
                className="contact-card"
                style={{ display: 'flex', flexDirection: 'column', gap: '4px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 18px', minWidth: 0 }}
              >
                <span style={{ color: 'var(--faint)', fontSize: '11.5px' }}>~/email</span>
                <span style={{ color: 'var(--text)', fontSize: '13px', overflowWrap: 'anywhere' }}>hola@jeffercode.com</span>
              </a>
              <a
                href="https://github.com/JefferLindao"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                style={{ display: 'flex', flexDirection: 'column', gap: '4px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 18px', minWidth: 0 }}
              >
                <span style={{ color: 'var(--faint)', fontSize: '11.5px' }}>~/github</span>
                <span style={{ color: 'var(--text)', fontSize: '13px', overflowWrap: 'anywhere' }}>github.com/JefferLindao</span>
              </a>
              <a
                href="https://linkedin.com/in/jefferlindao"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                style={{ display: 'flex', flexDirection: 'column', gap: '4px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 18px', minWidth: 0 }}
              >
                <span style={{ color: 'var(--faint)', fontSize: '11.5px' }}>~/linkedin</span>
                <span style={{ color: 'var(--text)', fontSize: '13px', overflowWrap: 'anywhere' }}>linkedin.com/in/jefferlindao</span>
              </a>
              <div
                className="contact-card"
                style={{ display: 'flex', flexDirection: 'column', gap: '4px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 18px', cursor: 'default', minWidth: 0 }}
              >
                <span style={{ color: 'var(--faint)', fontSize: '11.5px' }}>~/ubicacion</span>
                <span style={{ color: 'var(--text)', fontSize: '13px' }}>Durán · Ecuador 🇪🇨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
