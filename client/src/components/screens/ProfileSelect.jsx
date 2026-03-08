import { useEffect, useState } from 'react'
import { getProfileSummary } from '../../storage'
import { subjects } from '../../content/index'

const PROFILES = [
  { name: 'nathaniel', display: 'Nathaniel', initial: 'N', cssClass: 'nathaniel', accent: 'var(--accent-n)' },
  { name: 'isaac',     display: 'Isaac',     initial: 'I', cssClass: 'isaac',     accent: 'var(--accent-i)' },
]

export default function ProfileSelect({ onSelect }) {
  const [summaries, setSummaries] = useState({})

  useEffect(() => {
    const s = {}
    for (const p of PROFILES) {
      s[p.name] = getProfileSummary(p.name, subjects)
    }
    setSummaries(s)
  }, [])

  return (
    <div className="profile-screen">
      <div className="profile-title">Learning Portal</div>
      <div className="profile-subtitle">Secondary 1 G3 – Singapore</div>
      <div className="profile-cards">
        {PROFILES.map(p => {
          const summary = summaries[p.name]
          return (
            <div
              key={p.name}
              className={`profile-card ${p.cssClass}`}
              onClick={() => onSelect(p.name)}
            >
              <div className="big-avatar" style={{ background: p.accent }}>{p.initial}</div>
              <h3>{p.display}</h3>
              <p>Sec 1 G3 Math</p>
              {summary && summary.completed > 0 && (
                <p className="profile-progress">{summary.completed} topics completed</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
