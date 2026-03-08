import { useState } from 'react'

const LETTERS = ['A', 'B', 'C', 'D']

export default function Quiz({ state, setState, topic, accent, onFinish, onExit }) {
  const { questions, currentQ, answers } = state
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
      const score = answers.filter((a, i) => a === questions[i].ans).length
      onFinish(score, questions.length)
    } else {
      setState(s => ({ ...s, currentQ: s.currentQ + 1 }))
    }
  }

  function confirmExit() {
    if (window.confirm('Exit quiz? Your progress will be lost.')) onExit()
  }

  const display = topic.meta.title

  return (
    <div style={{ '--accent': accent }}>
      <header className="app-header">
        <div className="logo">{display}</div>
      </header>
      <div className="quiz-view">
        <button className="breadcrumb" onClick={confirmExit}>← Exit Quiz</button>
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
            style={{ background: answered ? accent : 'var(--surface2)', color: answered ? '#fff' : 'var(--text-dim)' }}
            onClick={next}
            disabled={!answered}
          >
            {isLast ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}
