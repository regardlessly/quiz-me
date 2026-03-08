import { useState } from 'react'
import { subjects } from './content/index'
import { recordScore } from './storage'
import { postScore } from './api'
import { pickQuestions } from './quiz'
import ProfileSelect from './components/screens/ProfileSelect'
import SubjectSelect from './components/screens/SubjectSelect'
import Dashboard from './components/screens/Dashboard'
import TopicDetail from './components/screens/TopicDetail'
import Quiz from './components/screens/Quiz'
import QuizResult from './components/screens/QuizResult'

export default function App() {
  const [screen, setScreen] = useState('profile')
  const [profile, setProfile] = useState(null)
  const [subject, setSubject] = useState(null)
  const [topicMod, setTopicMod] = useState(null)
  const [quizState, setQuizState] = useState(null)
  const [quizResult, setQuizResult] = useState(null)

  const accent = profile === 'nathaniel' ? 'var(--accent-n)' : 'var(--accent-i)'

  function selectProfile(name) {
    setProfile(name)
    if (subjects.length === 1) {
      setSubject(subjects[0])
      setScreen('dashboard')
    } else {
      setScreen('subjects')
    }
  }

  function selectSubject(sub) {
    setSubject(sub)
    setScreen('dashboard')
  }

  function selectTopic(mod) {
    setTopicMod(mod)
    setScreen('topic')
  }

  function startQuiz() {
    const questions = pickQuestions(topicMod.questions, 10)
    setQuizState({ questions, currentQ: 0, answers: Array(questions.length).fill(null) })
    setScreen('quiz')
  }

  async function finishQuiz(score, total) {
    recordScore(profile, subject.id, topicMod.meta.id, score, total)
    await postScore(profile, subject.id, topicMod.meta.id, topicMod.meta.title, score, total)
    setQuizResult({ score, total })
    setScreen('results')
  }

  function switchProfile() {
    setProfile(null)
    setSubject(null)
    setTopicMod(null)
    setQuizState(null)
    setQuizResult(null)
    setScreen('profile')
  }

  return (
    <>
      {screen === 'profile' && (
        <ProfileSelect onSelect={selectProfile} />
      )}
      {screen === 'subjects' && subject === null && (
        <SubjectSelect
          subjects={subjects}
          profile={profile}
          accent={accent}
          onSelect={selectSubject}
          onBack={switchProfile}
        />
      )}
      {screen === 'dashboard' && subject && (
        <Dashboard
          profile={profile}
          subject={subject}
          accent={accent}
          onSelectTopic={selectTopic}
          onSwitchProfile={switchProfile}
        />
      )}
      {screen === 'topic' && topicMod && (
        <TopicDetail
          topic={topicMod}
          profile={profile}
          subject={subject}
          accent={accent}
          onStartQuiz={startQuiz}
          onBack={() => setScreen('dashboard')}
        />
      )}
      {screen === 'quiz' && quizState && (
        <Quiz
          state={quizState}
          setState={setQuizState}
          topic={topicMod}
          accent={accent}
          onFinish={finishQuiz}
          onExit={() => setScreen('topic')}
        />
      )}
      {screen === 'results' && quizResult && (
        <QuizResult
          result={quizResult}
          topic={topicMod}
          accent={accent}
          onRetry={startQuiz}
          onReviewNotes={() => setScreen('topic')}
          onBack={() => setScreen('dashboard')}
        />
      )}
    </>
  )
}
