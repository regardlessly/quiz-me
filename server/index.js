const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;
const PARENT_TOKEN = process.env.PARENT_TOKEN || 'parent123';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Internal Render connections don't use SSL; external ones do
  ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('render.com')
    ? { rejectUnauthorized: false }
    : false
});

app.use(cors());
app.use(express.json());

// ── DB init ─────────────────────────────────────────────────────────────────
async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS quiz_scores (
      id         SERIAL PRIMARY KEY,
      profile    VARCHAR(20)  NOT NULL,
      topic_id   INTEGER      NOT NULL,
      topic_title VARCHAR(100),
      score      INTEGER      NOT NULL,
      total      INTEGER      NOT NULL,
      created_at TIMESTAMPTZ  DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_qs_profile ON quiz_scores(profile);
    CREATE INDEX IF NOT EXISTS idx_qs_topic   ON quiz_scores(topic_id);
  `);
  console.log('DB ready');
}

// ── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get('/health', (_, res) => res.json({ ok: true }));

// POST /api/scores — save one attempt
app.post('/api/scores', async (req, res) => {
  const { profile, topic_id, topic_title, score, total } = req.body;
  if (!profile || topic_id == null || score == null || total == null) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const result = await pool.query(
    `INSERT INTO quiz_scores (profile, topic_id, topic_title, score, total)
     VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [profile, topic_id, topic_title || '', score, total]
  );
  res.json(result.rows[0]);
});

// GET /api/scores/:profile — best score + history per topic
app.get('/api/scores/:profile', async (req, res) => {
  const { profile } = req.params;
  const rows = await pool.query(
    `SELECT topic_id, score, total, created_at FROM quiz_scores
     WHERE profile = $1 ORDER BY created_at ASC`,
    [profile]
  );

  const best = {};
  const history = {};
  for (const r of rows.rows) {
    const tid = r.topic_id;
    if (best[tid] === undefined || r.score > best[tid]) best[tid] = r.score;
    if (!history[tid]) history[tid] = [];
    history[tid].push({ score: r.score, total: r.total, date: r.created_at });
  }
  res.json({ scores: best, history });
});

// GET /parent?token=xxx — parent dashboard
app.get('/parent', async (req, res) => {
  if (req.query.token !== PARENT_TOKEN) {
    return res.status(401).send('<h2>Access denied. Add ?token=YOUR_TOKEN to the URL.</h2>');
  }

  const rows = await pool.query(
    `SELECT profile, topic_id, topic_title, score, total, created_at
     FROM quiz_scores ORDER BY created_at DESC`
  );

  const profiles = ['nathaniel', 'isaac'];
  const colors = { nathaniel: '#4a9eff', isaac: '#ff8c42' };

  // Build per-profile summaries
  function buildSummary(profile) {
    const attempts = rows.rows.filter(r => r.profile === profile);
    const byTopic = {};
    for (const a of attempts) {
      const tid = a.topic_id;
      if (!byTopic[tid]) byTopic[tid] = { title: a.topic_title || `Topic ${tid}`, attempts: [], best: 0 };
      byTopic[tid].attempts.push(a);
      if (a.score > byTopic[tid].best) byTopic[tid].best = a.score;
    }
    return { attempts, byTopic };
  }

  const summaries = {};
  for (const p of profiles) summaries[p] = buildSummary(p);

  const recentRows = rows.rows.slice(0, 30);

  function pct(score, total) { return Math.round(score / total * 100); }
  function badge(score, total) {
    const p = pct(score, total);
    const color = p >= 80 ? '#22c55e' : p >= 50 ? '#f59e0b' : '#ef4444';
    return `<span style="color:${color};font-weight:700">${score}/${total} (${p}%)</span>`;
  }

  const topicSections = profiles.map(profile => {
    const { byTopic } = summaries[profile];
    const color = colors[profile];
    const name = profile.charAt(0).toUpperCase() + profile.slice(1);
    const topicRows = Object.entries(byTopic).sort(([a],[b]) => a - b).map(([tid, t]) => `
      <tr>
        <td>${t.title}</td>
        <td style="text-align:center">${badge(t.best, t.attempts[0].total)}</td>
        <td style="text-align:center">${t.attempts.length}</td>
        <td style="text-align:center">${new Date(t.attempts[t.attempts.length-1].created_at).toLocaleDateString('en-SG',{day:'numeric',month:'short',year:'numeric'})}</td>
      </tr>`).join('');

    return `
      <div class="card">
        <h2 style="color:${color}">${name}</h2>
        ${Object.keys(byTopic).length === 0
          ? '<p style="opacity:0.5">No attempts yet.</p>'
          : `<table>
              <thead><tr><th>Topic</th><th>Best Score</th><th>Attempts</th><th>Last Played</th></tr></thead>
              <tbody>${topicRows}</tbody>
             </table>`}
      </div>`;
  }).join('');

  const activityRows = recentRows.map(r => {
    const name = r.profile.charAt(0).toUpperCase() + r.profile.slice(1);
    const color = colors[r.profile];
    const dt = new Date(r.created_at);
    return `<tr>
      <td>${dt.toLocaleDateString('en-SG',{day:'numeric',month:'short'})} ${dt.toLocaleTimeString('en-SG',{hour:'2-digit',minute:'2-digit'})}</td>
      <td style="color:${color};font-weight:600">${name}</td>
      <td>${r.topic_title || `Topic ${r.topic_id}`}</td>
      <td>${badge(r.score, r.total)}</td>
    </tr>`;
  }).join('');

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Math Portal — Parent Dashboard</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: system-ui, sans-serif; background: #0f1117; color: #e2e8f0; min-height: 100vh; padding: 24px 16px; }
  h1 { font-size: 24px; margin-bottom: 4px; }
  .sub { opacity: 0.5; font-size: 13px; margin-bottom: 28px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }
  @media(max-width:640px){ .grid { grid-template-columns: 1fr; } }
  .card { background: #1a1d27; border: 1px solid #2a2d3a; border-radius: 12px; padding: 20px; }
  h2 { font-size: 18px; margin-bottom: 16px; }
  h3 { font-size: 15px; margin-bottom: 12px; opacity: 0.8; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { text-align: left; padding: 8px 10px; border-bottom: 1px solid #2a2d3a; opacity: 0.5; font-weight: 600; font-size: 11px; text-transform: uppercase; }
  td { padding: 9px 10px; border-bottom: 1px solid #1e2130; }
  tr:last-child td { border-bottom: none; }
  .refresh { display: inline-block; margin-top: 20px; padding: 8px 18px; background: #2a2d3a; border-radius: 8px; cursor: pointer; font-size: 13px; text-decoration: none; color: inherit; }
</style>
</head>
<body>
  <h1>📊 Parent Dashboard</h1>
  <p class="sub">Last updated: ${new Date().toLocaleString('en-SG')}</p>

  <div class="grid">${topicSections}</div>

  <div class="card">
    <h3>Recent Activity (last 30 attempts)</h3>
    ${recentRows.length === 0
      ? '<p style="opacity:0.5">No activity yet.</p>'
      : `<table>
          <thead><tr><th>Date/Time</th><th>Child</th><th>Topic</th><th>Score</th></tr></thead>
          <tbody>${activityRows}</tbody>
         </table>`}
  </div>

  <a class="refresh" href="?token=${PARENT_TOKEN}">↻ Refresh</a>
</body>
</html>`);
});

// ── Start ─────────────────────────────────────────────────────────────────────
initDB().then(() => {
  app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
}).catch(err => {
  console.error('Failed to init DB:', err);
  process.exit(1);
});
