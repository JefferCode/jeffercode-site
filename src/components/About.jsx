import JcBrand from './JcBrand'

export default function About() {
  return (
    <section id="about" style={{ scrollMarginTop: '54px', paddingBlock: '60px' }}>
      <div className="inner">
        <div style={{ marginBottom: '34px' }}>
          <div style={{ color: 'var(--faint)', fontSize: '13px', marginBottom: '8px' }}>// 01</div>
          <h2 style={{ fontSize: 'clamp(22px,3.2vw,30px)', margin: 0, fontWeight: 700, color: '#fff', textWrap: 'balance' }}>
            <span style={{ color: 'var(--green)' }}>$</span> cat <span style={{ color: 'var(--blue)' }}>sobre-mi.md</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

          <div style={{ flex: '2 1 440px', minWidth: '300px' }}>
            <div style={{ borderLeft: '2px solid var(--border)', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <p style={{ margin: 0, color: 'var(--text)', fontSize: '15px', lineHeight: 1.85 }}>
                Tecnólogo en Informática con mención en Análisis de Sistemas. Apasionado por construir
                soluciones con impacto real. Más de <span style={{ color: 'var(--green)' }}>6 años</span> de
                experiencia en banca y telecomunicaciones para empresas como{' '}
                <span style={{ fontWeight: 600, color: 'var(--text)' }}>CONECEL (Claro)</span> y{' '}
                <span style={{ fontWeight: 600, color: 'var(--text)' }}>Banco Bolivariano</span>.
              </p>
              <p style={{ margin: 0, color: 'var(--text)', fontSize: '15px', lineHeight: 1.85 }}>
                Especializado en desarrollo <span style={{ color: 'var(--blue)' }}>full stack</span> — frontend y
                backend — con experiencia en nube (AWS · Azure), APIs REST y aplicaciones web modernas.
                Fundador de <JcBrand />, mi marca personal de desarrollo de software.
              </p>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: '14.5px', lineHeight: 1.85 }}>
                <span style={{ color: 'var(--faint)' }}>// </span>
                Del análisis de negocio al producto terminado — construyo lo que el problema necesita, no lo que es más fácil.
              </p>
            </div>
          </div>

          <div style={{ flex: '1 1 280px', minWidth: '260px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '22px 24px' }}>
            <div style={{ color: 'var(--muted)', fontSize: '12.5px', marginBottom: '16px' }}>
              const <span style={{ color: 'var(--amber)' }}>perfil</span> = {'{'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px', paddingLeft: '14px' }}>
              <div>
                <div style={{ color: 'var(--purple)', fontSize: '12px' }}>nombre:</div>
                <div style={{ color: 'var(--text)', fontSize: '14px' }}>Jefferson A. Lindao A.</div>
              </div>
              <div>
                <div style={{ color: 'var(--purple)', fontSize: '12px' }}>marca:</div>
                <div style={{ fontSize: '14px' }}><JcBrand /></div>
              </div>
              <div>
                <div style={{ color: 'var(--purple)', fontSize: '12px' }}>ubicacion:</div>
                <div style={{ color: 'var(--text)', fontSize: '14px' }}>Durán · Ecuador</div>
              </div>
              <div>
                <div style={{ color: 'var(--purple)', fontSize: '12px' }}>email:</div>
                <div style={{ color: 'var(--green)', fontSize: '13.5px', wordBreak: 'break-all' }}>hola@jeffercode.com</div>
              </div>
              <div>
                <div style={{ color: 'var(--purple)', fontSize: '12px' }}>github:</div>
                <a href="https://github.com/JefferLindao" target="_blank" rel="noreferrer" style={{ color: 'var(--green)', fontSize: '14px' }}>JefferLindao</a>
              </div>
              <div>
                <div style={{ color: 'var(--purple)', fontSize: '12px' }}>linkedin:</div>
                <a href="https://linkedin.com/in/jefferlindao" target="_blank" rel="noreferrer" style={{ color: 'var(--green)', fontSize: '14px' }}>jefferlindao</a>
              </div>
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '12.5px', marginTop: '16px' }}>{'}'}</div>
          </div>

        </div>
      </div>
    </section>
  )
}
