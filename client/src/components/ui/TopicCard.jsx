export default function TopicCard({ topic, score, accent, onClick }) {
  const { meta } = topic
  const locked = !topic.notes && !topic.questions
  const done = score !== undefined
  const perfect = score === 10

  return (
    <div
      className={`topic-row${locked ? ' locked' : ''}`}
      onClick={locked ? undefined : onClick}
      style={!locked ? { '--hover-border': accent } : {}}
    >
      <div className={`topic-num${done ? ' done' : ''}`}>{meta.id}</div>
      <div className="topic-info">
        <h4>{meta.title}</h4>
        <p>{locked ? 'Coming soon' : meta.desc}</p>
      </div>
      {done && (
        <div className={`topic-score${perfect ? ' perfect' : ''}`}>
          {score}/10
        </div>
      )}
    </div>
  )
}
