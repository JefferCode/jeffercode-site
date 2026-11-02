import JcBrand from './JcBrand'

export default function Projects() {
  return (
    <section id="projects" style={{ scrollMarginTop: '54px', paddingBlock: '60px' }}>
      <div className="inner">
        <div style={{ marginBottom: '34px' }}>
          <div style={{ color: 'var(--faint)', fontSize: '13px', marginBottom: '8px' }}>// 03</div>
          <h2 style={{ fontSize: 'clamp(22px,3.2vw,30px)', margin: 0, fontWeight: 700, color: '#fff', textWrap: 'balance' }}>
            <span style={{ color: 'var(--green)' }}>$</span> ls <span style={{ color: 'var(--blue)' }}>~/proyectos/</span><JcBrand />
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '10px 0 0', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--faint)' }}>// </span>
            Proyectos propios — del problema al producto terminado, desplegado y en uso real.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '22px' }}>

          {/* Segunda Vuelta */}
          <div className="proj-card" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
            <div style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--border)', padding: '16px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ color: 'var(--green)', fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '4px' }}>proyecto propio</div>
                <div style={{ color: '#fff', fontSize: '17px', fontWeight: 700 }}>Segunda Vuelta</div>
              </div>
              <span style={{ background: 'rgba(63,185,80,.15)', color: 'var(--green)', border: '1px solid rgba(63,185,80,.3)', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', whiteSpace: 'nowrap' }}>En producción</span>
            </div>
            <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ margin: 0, color: 'var(--text)', fontSize: '14px', lineHeight: 1.8 }}>
                PWA de gestión de créditos y cobros para una tienda de ropa de segunda mano.
                Reemplaza el seguimiento manual de compras a crédito, abonos y notificaciones a clientas.
                La marca <JcBrand /> aparece en cada comprobante enviado.
              </p>
              <div>
                <div style={{ color: 'var(--muted)', fontSize: '12px', marginBottom: '10px' }}>stack</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Edge Functions', 'Vercel'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="tag-blue">PWA · instalable</span>
                <span className="tag-amber">notificaciones por correo</span>
                <span className="tag-amber">WhatsApp integrado</span>
              </div>
            </div>
          </div>

          {/* Gestión de Gastos */}
          <div className="proj-card" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden' }}>
            <div style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--border)', padding: '16px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ color: 'var(--green)', fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '4px' }}>proyecto propio</div>
                <div style={{ color: '#fff', fontSize: '17px', fontWeight: 700 }}>Gestión de Gastos</div>
              </div>
              <span style={{ background: 'rgba(88,166,255,.12)', color: 'var(--blue)', border: '1px solid rgba(88,166,255,.25)', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', whiteSpace: 'nowrap' }}>Completado</span>
            </div>
            <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ margin: 0, color: 'var(--text)', fontSize: '14px', lineHeight: 1.8 }}>
                Aplicación web para registro y análisis de gastos personales.
                Punto de referencia de arquitectura y nomenclatura de base de datos
                que estableció el estándar para proyectos posteriores.
              </p>
              <div>
                <div style={{ color: 'var(--muted)', fontSize: '12px', marginBottom: '10px' }}>stack</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {['React', 'Supabase', 'PostgreSQL', 'Stored Procedures', 'Vercel'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: '24px', padding: '16px 20px', border: '1px dashed var(--border)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <JcBrand style={{ fontSize: '14px', fontWeight: 700, flexShrink: 0 }} />
          <span style={{ color: 'var(--muted)', fontSize: '13.5px', lineHeight: 1.6, minWidth: 0 }}>
            es la marca detrás de mis proyectos personales. Cada línea que escribo bajo esta marca tiene un usuario real al otro lado de la pantalla.
          </span>
        </div>
      </div>
    </section>
  )
}
