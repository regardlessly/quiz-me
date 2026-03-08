const key = (profile, subjectId) => `mathportal_${profile}_${subjectId}`

export function getData(profile, subjectId) {
  const raw = localStorage.getItem(key(profile, subjectId))
  if (!raw) return { scores: {}, history: {} }
  return JSON.parse(raw)
}

export function saveData(profile, subjectId, data) {
  localStorage.setItem(key(profile, subjectId), JSON.stringify(data))
}

export function recordScore(profile, subjectId, topicId, score, total) {
  const data = getData(profile, subjectId)
  const tid = String(topicId)
  if (data.scores[tid] === undefined || score > data.scores[tid]) {
    data.scores[tid] = score
  }
  if (!data.history[tid]) data.history[tid] = []
  data.history[tid].push({ score, total, date: new Date().toISOString() })
  saveData(profile, subjectId, data)
}

export function mergeRemoteScores(profile, subjectId, remote) {
  // Remote DB is the source of truth — replace local scores/history entirely
  const data = {
    scores: remote.scores || {},
    history: remote.history || {}
  }
  saveData(profile, subjectId, data)
  return data
}

export function getProfileSummary(profile, subjects) {
  let completed = 0
  for (const sub of subjects) {
    const data = getData(profile, sub.id)
    completed += Object.keys(data.scores || {}).length
  }
  return { completed }
}
