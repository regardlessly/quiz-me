import { useState } from 'react'
import AppHeader from '../ui/AppHeader'

const LETTERS = ['A', 'B', 'C', 'D']

export default function Quiz({ state, setState, topic, profile, accent, onFinish, onExit }) {
  const { questions, currentQ, answers } = state
  const [submitting, setSubmitting] = useState(false)
  const q = questions[currentQ]
  const answered = answers[currentQ] !== null
  const isLast = currentQ === questions.length - 1
  const progress = (currentQ + 1) / questions.length

  function selectAnswer(idx) {
    if (answered) return
    const next = [...answers]
    next[currentQ] = idx
    setState(s => ({ ...s, answers: next }))
  }

  function next() {
    if (!answered) return
    if (isLast) {
      if (submitting) return
      setSubmitting(true)
      const score = answers.filter((a, i) => a === questions[i].ans).length
      onFinish(score, questions.length)
    } else {
      setState(s => ({ ...s, currentQ: s.currentQ + 1 }))
    }
  }

  return (
    <div style={{ '--accent': accent }}>
      <AppHeader
        onBack={onExit}
        backLabel="Exit Quiz"
        confirmBack="Exit quiz? Your progress will be lost."
        title={topic.meta.title}
        profile={profile}
        accent={accent}
      />
      <div className="quiz-view">
        <div className="quiz-progress">
          <div className="quiz-progress-bar">
            <div
              className="quiz-progress-fill"
              style={{ width: `${progress * 100}%`, background: accent }}
            />
          </div>
          <div className="quiz-progress-text">{currentQ + 1} / {questions.length}</div>
        </div>

        <div className="question-card">
          <h3>{q.q}</h3>
          <div className="options">
            {q.opts.map((opt, i) => {
              let cls = 'option-btn'
              if (answered) {
                cls += ' disabled'
                if (i === q.ans) cls += ' correct'
                else if (i === answers[currentQ]) cls += ' wrong'
              } else if (i === answers[currentQ]) {
                cls += ' selected'
              }
              return (
                <button key={i} className={cls} onClick={() => selectAnswer(i)}>
                  <span className="opt-letter">{LETTERS[i]}</span>
                  {opt}
                </button>
              )
            })}
          </div>
          {answered && (
            <div className="explanation">💡 {q.explain}</div>
          )}
        </div>

        <div className="quiz-nav">
          <button
            className="nav-btn"
            style={{ background: answered ? 'var(--gold)' : 'var(--surface2)', color: answered ? '#000' : 'var(--text-dim)' }}
            onClick={next}
            disabled={!answered || submitting}
          >
            {isLast ? 'Submit' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  )
}
