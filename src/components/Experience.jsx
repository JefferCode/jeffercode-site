const jobs = [
  {
    hash: 'a3f9c1',
    client: 'banco-bolivariano',
    date: 'Mar 2022 – Presente',
    title: 'Sistema de Compra de Cartera',
    role: 'Analista de Sistemas · IROUTE-SOLUTIONS',
    desc: 'Plataforma de gestión de cartera crediticia con procesamiento de datos en AWS Glue y reportería en tiempo real.',
    tags: ['SQL Server', 'Sybase', 'Java 17', 'Spring Boot', 'OpenShift', 'AWS'],
    dotColor: 'var(--green)',
  },
  {
    hash: '7b2e04',
    client: 'banco-bolivariano',
    date: 'Ago 2021 – Presente',
    title: 'Sistema de Accionistas',
    role: 'Analista de Sistemas · IROUTE-SOLUTIONS',
    desc: 'Módulo de gestión de accionistas y distribución de dividendos con Angular 18 y backend .NET.',
    tags: ['MySQL', 'Angular 18', 'C#', '.NET Core', 'AWS'],
    dotColor: 'var(--green)',
  },
  {
    hash: 'c5d1a8',
    client: 'banco-bolivariano',
    date: 'Ene 2020 – Dic 2022',
    title: 'Migración de Core — CREDIMATIC',
    role: 'Analista de Sistemas · IROUTE-SOLUTIONS',
    desc: 'Migración del core de tarjetas de crédito a AWS con pipelines ETL en Glue y S3 para datos históricos.',
    tags: ['AWS', 'Glue', 'S3', 'Python', 'ETL', 'Angular 18'],
    dotColor: 'var(--green)',
  },
  {
    hash: 'e8f330',
    client: 'banco-bolivariano',
    date: 'Sep 2019 – Jul 2020',
    title: 'Sistema de Reclamos',
    role: 'Analista de Sistemas · IROUTE-SOLUTIONS',
    desc: 'API REST para gestión de reclamos bancarios documentada con Swagger e integrada al portal web del banco.',
    tags: ['MySQL', 'C#', '.NET Core', 'Swagger', 'AWS'],
    dotColor: 'var(--green)',
  },
  {
    hash: '10a47c',
    client: 'conecel-claro',
    date: 'Sep 2018 – Ago 2019',
    title: 'PDA CSA — CONECEL',
    role: 'Analista de Sistemas · IROUTE-SOLUTIONS',
    desc: 'Aplicación de punto de venta y gestión de clientes para la operadora Claro Ecuador.',
    tags: ['PL/SQL Oracle', 'Java', 'Angular 8', 'Ionic 3'],
    dotColor: 'var(--blue)',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ scrollMarginTop: '54px', paddingBlock: '60px' }}>
      <div className="inner">
        <div style={{ marginBottom: '34px' }}>
          <div style={{ color: 'var(--faint)', fontSize: '13px', marginBottom: '8px' }}>// 04</div>
          <h2 style={{ fontSize: 'clamp(22px,3.2vw,30px)', margin: 0, fontWeight: 700, color: '#fff', textWrap: 'balance' }}>
            <span style={{ color: 'var(--green)' }}>$</span> git log <span style={{ color: 'var(--muted)' }}>--oneline</span> <span style={{ color: 'var(--blue)' }}>~/experiencia</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {jobs.map((job, idx) => {
            const isLast = idx === jobs.length - 1
            return (
              <div key={job.hash} style={{ display: 'flex', gap: '18px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: 'var(--bg)', border: `2px solid ${job.dotColor}`, marginTop: '4px', flexShrink: 0 }} />
                  {!isLast && <span style={{ width: '2px', flex: 1, background: 'var(--border)' }} />}
                </div>
                <div style={{ paddingBottom: isLast ? 0 : '26px', flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '5px' }}>
                    <span style={{ color: 'var(--amber)', fontSize: '13px' }}>{job.hash}</span>
                    <span style={{ color: 'var(--purple)', fontSize: '12.5px' }}>({job.client})</span>
                    <span style={{ color: 'var(--muted)', fontSize: '12.5px' }}>{job.date}</span>
                  </div>
                  <h3 style={{ margin: '0 0 4px', fontSize: '16px', color: 'var(--text)', fontWeight: 600 }}>{job.title}</h3>
                  <p style={{ margin: '0 0 6px', color: 'var(--muted)', fontSize: '13.5px' }}>{job.role}</p>
                  <p style={{ margin: '0 0 10px', color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6 }}>{job.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
