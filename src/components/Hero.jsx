import { useEffect, useRef } from 'react'
import JcBrand from './JcBrand'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const el = typedRef.current
    if (!el) return
    const text = 'Desarrollador Full Stack'
    el.textContent = ''
    let i = 0
    let timer
    const tick = () => {
      el.textContent = text.slice(0, i)
      if (i < text.length) { i++; timer = setTimeout(tick, 58) }
    }
    const start = setTimeout(tick, 550)
    return () => { clearTimeout(start); clearTimeout(timer) }
  }, [])

  return (
    <section id="hero" style={{ paddingBlock: '118px 70px' }}>
      <div className="inner" style={{ display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}>

        {/* Texto principal */}
        <div style={{ flex: '1 1 460px', minWidth: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)', fontSize: '13px', marginBottom: '26px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 8px var(--green)', flexShrink: 0 }} />
            Disponible para nuevos proyectos
          </div>

          <div style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '6px' }}>
            <span style={{ color: 'var(--green)' }}>$</span> whoami
          </div>
          <h1 style={{ fontSize: 'clamp(30px,5.2vw,52px)', lineHeight: 1.08, margin: '0 0 24px', fontWeight: 800, letterSpacing: '-1px', color: '#fff', textWrap: 'balance' }}>
            Jefferson Aníbal<br /><span style={{ color: 'var(--green)' }}>Lindao Alejandro</span>
          </h1>

          <div style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '6px' }}>
            <span style={{ color: 'var(--green)' }}>$</span> cat role.txt
          </div>
          <div style={{ fontSize: 'clamp(18px,2.6vw,24px)', fontWeight: 600, color: 'var(--blue)', marginBottom: '14px', minHeight: '1.4em' }}>
            <span ref={typedRef} />
            <span style={{ display: 'inline-block', width: '10px', height: '1.05em', background: 'var(--green)', marginLeft: '3px', transform: 'translateY(2px)', animation: 'blink 1.05s steps(1) infinite' }} />
          </div>

          <div style={{ fontSize: '13.5px', color: 'var(--muted)', marginBottom: '28px', lineHeight: 1.7 }}>
            <span style={{ color: 'var(--faint)' }}>// </span>
            Fundador de <JcBrand style={{ fontSize: '13.5px' }} /> · soluciones digitales hechas en Ecuador.<br />
            <span style={{ color: 'var(--faint)' }}>// </span>
            +6 años en banca y telecomunicaciones. Java · C# · JavaScript · AWS · Azure.
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: 'var(--green)', color: '#06210d', fontWeight: 700, fontSize: '14px', padding: '12px 20px', borderRadius: '8px', transition: '.2s', fontFamily: 'var(--mono)' }}
              onMouseOver={e => { e.currentTarget.style.background = '#4fd364'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(63,185,80,.28)' }}
              onMouseOut={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >
              <span style={{ opacity: .65 }}>$</span> ./contactar.sh
            </a>
            <a
              href="https://github.com/JefferLindao"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', color: 'var(--text)', fontSize: '14px', padding: '12px 18px', border: '1px solid var(--border)', borderRadius: '8px', transition: '.2s', fontFamily: 'var(--mono)' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--blue)' }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
            >
              git clone <span style={{ color: 'var(--muted)' }}>github/JefferLindao</span>
            </a>
          </div>
        </div>

        {/* Tarjeta JSON */}
        <div style={{ flex: '1 1 320px', minWidth: '280px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '360px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.45)' }}>
            <div style={{ height: '38px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 14px', borderBottom: '1px solid var(--border)', background: 'var(--surface2)' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--red)' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--amber)' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--green)' }} />
              <span style={{ marginLeft: '8px', color: 'var(--muted)', fontSize: '12px' }}>jeffercode.json</span>
            </div>
            <div style={{ padding: '24px', fontSize: '12.5px', lineHeight: 2, color: 'var(--muted)' }}>
              <div style={{ color: 'var(--faint)', marginBottom: '6px' }}>
                <span style={{ color: 'var(--green)' }}>$</span> cat jeffercode.json
              </div>
              <div style={{ paddingLeft: '4px' }}>
                <div>{'{'}</div>
                <div style={{ paddingLeft: '16px' }}>
                  <div><span style={{ color: 'var(--purple)' }}>"marca"</span>:&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--green)', fontWeight: 700 }}>"&lt;jeffercode/&gt;"</span><span style={{ color: 'var(--faint)' }}>,</span></div>
                  <div><span style={{ color: 'var(--purple)' }}>"eslogan"</span>:&nbsp;&nbsp;<span style={{ color: 'var(--amber)' }}>"Del problema al producto."</span><span style={{ color: 'var(--faint)' }}>,</span></div>
                  <div><span style={{ color: 'var(--purple)' }}>"tipo"</span>:&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--amber)' }}>"software · soluciones digitales"</span><span style={{ color: 'var(--faint)' }}>,</span></div>
                  <div><span style={{ color: 'var(--purple)' }}>"pais"</span>:&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--amber)' }}>"Ecuador 🇪🇨"</span><span style={{ color: 'var(--faint)' }}>,</span></div>
                  <div><span style={{ color: 'var(--purple)' }}>"disponible"</span>: <span style={{ color: 'var(--blue)' }}>true</span></div>
                </div>
                <div>{'}'}</div>
              </div>
              <div style={{ marginTop: '14px', color: 'var(--faint)', fontSize: '11px' }}>
                <span style={{ color: 'var(--green)' }}>✓</span> listo para el siguiente proyecto
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
