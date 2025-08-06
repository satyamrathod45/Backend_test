import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/jokes")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
        setJokes(data)
      })
      .catch(error => {
        console.error("Fetch error:", error)
      })
  }, [])

  return (
    <>
      <h1>Jokes</h1>
      {jokes.map((joke, i) => (
        <div key={i} className="joke-card">
          <h2 className="question">{joke.question}</h2>
          <p className="answer">{joke.answer}</p>
        </div>
      ))}
    </>
  )
}

export default App
