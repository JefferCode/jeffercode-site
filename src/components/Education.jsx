const certs = [
  { title: 'Escuela de JavaScript',          date: 'Oct 2020', desc: 'Full Stack JS · Stack MERN (Mongo · Express · React · Node)' },
  { title: 'Profesional de Git y GitHub',     date: 'Oct 2020', desc: 'Control de versiones y flujos colaborativos.' },
  { title: 'Fundamentos de C# con .NET Core', date: 'Ene 2021', desc: 'Bases del lenguaje y el ecosistema .NET.' },
  { title: 'C# con .NET Core',                date: 'Feb 2021', desc: 'Desarrollo de aplicaciones con .NET Core.' },
  { title: 'Fundamentos de Angular',          date: 'Abr 2022', desc: 'Componentes, servicios y SPAs con Angular.' },
]

export default function Education() {
  return (
    <section id="education" style={{ scrollMarginTop: '54px', paddingBlock: '60px' }}>
      <div className="inner">
        <div style={{ marginBottom: '34px' }}>
          <div style={{ color: 'var(--faint)', fontSize: '13px', marginBottom: '8px' }}>// 05</div>
          <h2 style={{ fontSize: 'clamp(22px,3.2vw,30px)', margin: 0, fontWeight: 700, color: '#fff', textWrap: 'balance' }}>
            <span style={{ color: 'var(--green)' }}>$</span> cat <span style={{ color: 'var(--blue)' }}>~/educacion</span>
          </h2>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '3px solid var(--green)', borderRadius: '12px', padding: '26px 28px', marginBottom: '30px' }}>
          <div style={{ color: 'var(--green)', fontSize: '12.5px', marginBottom: '8px' }}>[ título profesional ]</div>
          <h3 style={{ margin: '0 0 8px', fontSize: '19px', color: '#fff', fontWeight: 700 }}>Tecnólogo en Informática — Análisis de Sistemas</h3>
          <p style={{ margin: '0 0 4px', color: 'var(--blue)', fontSize: '14px' }}>Instituto Tecnológico Superior Guayaquil</p>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: '13px' }}>Registro SENESCYT: 2116-2018-1971210</p>
        </div>

        <div style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '18px' }}>
          <span style={{ color: 'var(--green)' }}>$</span> ls ~/certificaciones <span style={{ color: 'var(--faint)' }}>— Platzi</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '16px' }}>
          {certs.map((cert) => (
            <div key={cert.title} className="card" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--amber)', fontSize: '12px' }}>certificado</span>
                <span style={{ color: 'var(--muted)', fontSize: '11.5px' }}>{cert.date}</span>
              </div>
              <h4 style={{ margin: '0 0 6px', fontSize: '14.5px', color: 'var(--text)', fontWeight: 600 }}>{cert.title}</h4>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: '12.5px', lineHeight: 1.6 }}>{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
