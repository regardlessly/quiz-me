import AppHeader from '../ui/AppHeader'

export default function SubjectSelect({ subjects, profile, accent, onSelect, onBack }) {
  return (
    <div style={{ '--accent': accent }}>
      <AppHeader
        onBack={onBack}
        backLabel="Switch Student"
        profile={profile}
        accent={accent}
      />
      <div className="subject-screen">
        <h2>Choose a subject</h2>
        <p className="sub">What do you want to study today?</p>
        <div className="subject-cards">
          {subjects.map(sub => (
            <div key={sub.id} className="subject-card" onClick={() => onSelect(sub)}>
              <div className="subject-icon">{sub.icon}</div>
              <h3>{sub.title}</h3>
              <p>{sub.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
