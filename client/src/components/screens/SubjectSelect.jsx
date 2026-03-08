export default function SubjectSelect({ subjects, profile, accent, onSelect, onBack }) {
  const display = profile.charAt(0).toUpperCase() + profile.slice(1)
  return (
    <div style={{ '--accent': accent }}>
      <div className="subject-screen">
        <h2>Hi, {display}!</h2>
        <p className="sub">Choose a subject to study</p>
        <div className="subject-cards">
          {subjects.map(sub => (
            <div key={sub.id} className="subject-card" onClick={() => onSelect(sub)}>
              <div className="subject-icon">{sub.icon}</div>
              <h3>{sub.title}</h3>
              <p>{sub.subtitle}</p>
            </div>
          ))}
        </div>
        <button className="breadcrumb" style={{ marginTop: 32 }} onClick={onBack}>← Back</button>
      </div>
    </div>
  )
}
