const BASE = 'https://math-portal-api.onrender.com'

export async function fetchScores(profile, subjectId = 'math') {
  const r = await fetch(`${BASE}/api/scores/${profile}?subject=${subjectId}`)
  if (!r.ok) throw new Error('fetch failed')
  return r.json()
}

export function postScore(profile, subjectId, topicId, topicTitle, score, total) {
  fetch(`${BASE}/api/scores`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      profile,
      subject: subjectId,
      topic_id: topicId,
      topic_title: topicTitle,
      score,
      total
    })
  }).catch(() => {})
}
