import { useEffect, useState } from 'react'
import { getData, mergeRemoteScores } from '../../storage'
import { fetchScores } from '../../api'
import AppHeader from '../ui/AppHeader'
import TopicCard from '../ui/TopicCard'

export default function Dashboard({ profile, subject, accent, onSelectTopic, onBack, onSwitchProfile }) {
  const [scores, setScores] = useState({})

  function loadLocal() {
    const data = getData(profile, subject.id)
    setScores(data.scores || {})
  }

  useEffect(() => {
    loadLocal()
    fetchScores(profile, subject.id)
      .then(remote => {
        const merged = mergeRemoteScores(profile, subject.id, remote)
        setScores(merged.scores || {})
      })
      .catch(() => {})
  }, [profile, subject.id])

  const display = profile.charAt(0).toUpperCase() + profile.slice(1)
  const allScores = Object.values(scores)
  const completed = allScores.length
  const perfect = allScores.filter(s => s === 10).length
  const avg = completed > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / completed / 10 * 100) + '%'
    : '–'

  const sem1 = subject.topics.filter(t => t.meta.sem === 1)
  const sem2 = subject.topics.filter(t => t.meta.sem === 2)

  return (
    <div style={{ '--accent': accent }}>
      <AppHeader
        onBack={onBack}
        backLabel="Subjects"
        title={subject.title}
        subtitle={subject.subtitle || 'Sec 1 G3'}
        profile={profile}
        accent={accent}
        onSwitchProfile={onSwitchProfile}
      />
      <div className="dashboard">
        <div className="dash-header">
          <h2>Welcome back, {display}!</h2>
          <p>{subject.subtitle}</p>
        </div>
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-value" style={{ color: accent }}>{completed}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{avg}</div>
            <div className="stat-label">Avg Score</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ color: 'var(--green)' }}>{perfect}</div>
            <div className="stat-label">Perfect</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{subject.topics.length}</div>
            <div className="stat-label">Topics</div>
          </div>
        </div>

        {sem1.length > 0 && (
          <>
            <div className="semester-label">Semester 1</div>
            <div className="topics-grid">
              {sem1.map(t => (
                <TopicCard
                  key={t.meta.id}
                  topic={t}
                  score={scores[String(t.meta.id)]}
                  accent={accent}
                  onClick={() => onSelectTopic(t)}
                />
              ))}
            </div>
          </>
        )}

        {sem2.length > 0 && (
          <>
            <div className="semester-label">Semester 2</div>
            <div className="topics-grid">
              {sem2.map(t => (
                <TopicCard
                  key={t.meta.id}
                  topic={t}
                  score={scores[String(t.meta.id)]}
                  accent={accent}
                  onClick={() => onSelectTopic(t)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
