export default function HistoryModal({ title, history, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Past Attempts – {title}</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        {history.length === 0 ? (
          <p style={{ color: 'var(--text-dim)', fontSize: 14 }}>No attempts yet.</p>
        ) : (
          [...history].reverse().map((h, i) => {
            const pct = Math.round(h.score / h.total * 100)
            const color = pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)'
            const dt = new Date(h.date)
            return (
              <div key={i} className="history-item">
                <span className="history-date">
                  {dt.toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}
                  {' '}
                  {dt.toLocaleTimeString('en-SG', { hour: '2-digit', minute: '2-digit' })}
                </span>
                <span style={{ color, fontWeight: 700 }}>{h.score}/{h.total} ({pct}%)</span>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
