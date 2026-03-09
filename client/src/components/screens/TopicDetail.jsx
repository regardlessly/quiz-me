import { useState } from 'react'
import { getData } from '../../storage'
import AppHeader from '../ui/AppHeader'
import HistoryModal from '../ui/HistoryModal'
import TopicChat from '../ui/TopicChat'

export default function TopicDetail({ topic, profile, subject, accent, onStartQuiz, onBack, onSwitchProfile }) {
  const [showHistory, setShowHistory] = useState(false)
  const { meta, notes, questions } = topic

  const data = getData(profile, subject.id)
  const tid = String(meta.id)
  const history = data.history[tid] || []
  const bestScore = data.scores[tid]
  const hasAttempts = history.length > 0

  return (
    <div style={{ '--accent': accent }}>
      <AppHeader
        onBack={onBack}
        backLabel="Topics"
        title={subject.title}
        subtitle={subject.subtitle || 'Sec 1 G3'}
        profile={profile}
        accent={accent}
        onSwitchProfile={onSwitchProfile}
      />
      <div className="topic-view">
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

      <TopicChat topic={topic} subject={subject} accent={accent} />
    </div>
  )
}
