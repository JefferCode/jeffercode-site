const skillGroups = [
  {
    title: '~/lenguajes',
    items: ['Java', 'C#', 'JavaScript', 'TypeScript', 'HTML5 / CSS3', 'Python'],
  },
  {
    title: '~/frameworks',
    items: ['React / Vite', 'Angular', '.NET Core / Framework', 'Spring Boot', 'Node.js / Deno', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: '~/bases-de-datos',
    items: ['PostgreSQL / Supabase', 'MySQL', 'SQL Server', 'Oracle / PL/SQL', 'Sybase'],
  },
  {
    title: '~/cloud-devops',
    items: ['AWS (S3, Glue)', 'Azure', 'Supabase Edge Functions', 'Vercel', 'Git / GitHub', 'OpenShift'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ scrollMarginTop: '54px', paddingBlock: '60px' }}>
      <div className="inner">
        <div style={{ marginBottom: '34px' }}>
          <div style={{ color: 'var(--faint)', fontSize: '13px', marginBottom: '8px' }}>// 02</div>
          <h2 style={{ fontSize: 'clamp(22px,3.2vw,30px)', margin: 0, fontWeight: 700, color: '#fff', textWrap: 'balance' }}>
            <span style={{ color: 'var(--green)' }}>$</span> ls <span style={{ color: 'var(--blue)' }}>~/skills</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '18px' }}>
          {skillGroups.map((group) => (
            <div key={group.title} className="card" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 22px' }}>
              <div style={{ color: 'var(--green)', fontSize: '14px', fontWeight: 600, marginBottom: '15px' }}>{group.title}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '14px', color: 'var(--text)' }}>
                {group.items.map((item, idx) => (
                  <li key={item}>
                    <span style={{ color: 'var(--faint)' }}>{idx === group.items.length - 1 ? '└─' : '├─'}</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
