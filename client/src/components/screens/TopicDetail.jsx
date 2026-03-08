import { useState } from 'react'
import { getData } from '../../storage'
import HistoryModal from '../ui/HistoryModal'

export default function TopicDetail({ topic, profile, subject, accent, onStartQuiz, onBack }) {
  const [showHistory, setShowHistory] = useState(false)
  const { meta, notes, questions } = topic

  const data = getData(profile, subject.id)
  const tid = String(meta.id)
  const history = data.history[tid] || []
  const bestScore = data.scores[tid]
  const hasAttempts = history.length > 0
  const display = profile.charAt(0).toUpperCase() + profile.slice(1)

  return (
    <div style={{ '--accent': accent }}>
      <header className="app-header">
        <div className="logo">Math Portal <span>/ Sec 1 G3</span></div>
        <div className="header-right">
          <div className="profile-badge">
            <div className="avatar" style={{ background: accent }}>{display[0]}</div>
            <span>{display}</span>
          </div>
        </div>
      </header>
      <div className="topic-view">
        <button className="breadcrumb" onClick={onBack}>← Back to Topics</button>

        {notes ? (
          <div dangerouslySetInnerHTML={{ __html: notes }} />
        ) : (
          <div className="coming-soon">
            <h3>🚧 Coming Soon</h3>
            <p>Notes and quiz for <strong>{meta.title}</strong> are being prepared.</p>
          </div>
        )}

        <div className="topic-actions">
          {questions && (
            <button
              className="start-quiz-btn"
              style={{ background: accent }}
              onClick={onStartQuiz}
            >
              {hasAttempts ? `Retake Quiz (Best: ${bestScore}/10)` : 'Start Quiz – 10 Questions'}
            </button>
          )}
          {hasAttempts && (
            <button className="history-btn" onClick={() => setShowHistory(true)}>
              View Past Attempts ({history.length})
            </button>
          )}
        </div>
      </div>

      {showHistory && (
        <HistoryModal
          title={meta.title}
          history={history}
          onClose={() => setShowHistory(false)}
        />
      )}
    </div>
  )
}
