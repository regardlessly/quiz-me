import AppHeader from '../ui/AppHeader'

export default function QuizResult({ result, topic, profile, accent, onRetry, onReviewNotes, onBack, onSwitchProfile }) {
  const { score, total } = result
  const pct = Math.round(score / total * 100)

  const color = score >= 8 ? 'var(--green)' : score >= 5 ? 'var(--yellow)' : 'var(--red)'
  const msg = score === 10 ? '🎉 Perfect Score!'
    : score >= 8 ? '🌟 Great Job!'
    : score >= 5 ? '👍 Keep Going!'
    : '💪 Keep Practising!'
  const sub = score === 10 ? 'You got every question right!'
    : score >= 8 ? `You got ${score} out of ${total} — well done!`
    : score >= 5 ? `You got ${score} out of ${total} — review the notes and try again.`
    : `You got ${score} out of ${total} — don't give up!`

  return (
    <div style={{ '--accent': accent }}>
      <AppHeader
        title="Quiz Complete"
        profile={profile}
        accent={accent}
        onSwitchProfile={onSwitchProfile}
      />
      <div className="results-view">
        <div className="results-circle" style={{ borderColor: color, color }}>
          <div className="score-big">{score}</div>
          <div className="score-total">/ {total}</div>
        </div>
        <div className="results-msg">{msg}</div>
        <div className="results-sub">{sub} ({pct}%)</div>
        <div className="results-actions">
          <button
            style={{ background: accent, color: '#000' }}
            onClick={onRetry}
          >
            Try Again
          </button>
          {topic.notes && (
            <button className="btn-secondary" onClick={onReviewNotes}>
              Review Notes
            </button>
          )}
          <button className="btn-secondary" onClick={onBack}>
            Back to Topics
          </button>
        </div>
      </div>
    </div>
  )
}
