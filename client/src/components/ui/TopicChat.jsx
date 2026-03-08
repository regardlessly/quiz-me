import { useState, useRef, useEffect } from 'react'
import { chatWithTutor } from '../../api'

const GREETINGS = [
  "Eh bro, stuck on something? Ask lah! 🙋",
  "Aiyah don't paiseh, just ask! I won't judge one 😎",
  "Wah you came here — confirm got question right? Shoot lah!",
]

export default function TopicChat({ topic, subject, accent }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  const greeting = GREETINGS[topic.meta.id % GREETINGS.length]

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, loading])

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  async function send() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg = { role: 'user', content: text }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      const history = updated.slice(-10)
      const { reply } = await chatWithTutor(
        subject.id,
        topic.meta.title,
        text,
        history.slice(0, -1)   // exclude the message we just sent (server adds it)
      )
      setMessages(m => [...m, { role: 'assistant', content: reply }])
    } catch {
      setMessages(m => [...m, {
        role: 'assistant',
        content: 'Aiyah, connection drop sia 😵 Try again lah!'
      }])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  if (!open) {
    return (
      <button
        className="chat-fab"
        style={{ '--accent': accent }}
        onClick={handleOpen}
        aria-label="Ask tutor"
      >
        <span className="chat-fab-icon">💬</span>
        <span className="chat-fab-label">Ask Tutor</span>
      </button>
    )
  }

  return (
    <div className="chat-panel" style={{ '--accent': accent }}>
      <div className="chat-header">
        <div className="chat-header-title">
          <span className="chat-header-icon">🤖</span>
          <div>
            <div className="chat-header-name">{topic.meta.title} Tutor</div>
            <div className="chat-header-sub">Always on, no judging lah</div>
          </div>
        </div>
        <button className="chat-close" onClick={handleClose} aria-label="Close chat">✕</button>
      </div>

      <div className="chat-messages">
        <div className="chat-msg assistant chat-welcome">{greeting}</div>

        {messages.map((m, i) => (
          <div key={i} className={`chat-msg ${m.role}`}>
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="chat-msg assistant chat-typing">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-row">
        <input
          ref={inputRef}
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder={`Ask about ${topic.meta.title}…`}
          disabled={loading}
          maxLength={400}
        />
        <button
          className="chat-send"
          onClick={send}
          disabled={loading || !input.trim()}
          aria-label="Send"
        >
          ↑
        </button>
      </div>
    </div>
  )
}
