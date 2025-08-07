import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    let fetchJoke = async () => {
      let response = await axios.get('/api/joke');
      console.log(response.data);
      setJokes(response.data)
      
    }
    fetchJoke()
  } , [])

  return (
    <>
      <h1>Jokes</h1>
      {jokes.map((joke, i) => (
        <div key={i} className="joke-card">
          <h2>setup: </h2>
          <h3 className="question">{joke.setup}</h3>
          <p className="answer">{joke.punchline}</p>
        </div>
      ))}
    </>
  )
}

export default App
