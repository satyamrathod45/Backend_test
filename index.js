// server.js
import express from 'express'

const app = express()
const PORT = 3000


const jokes = [
  { id: 1, setup: 'Why don’t scientists trust atoms?', punchline: 'Because they make up everything!' },
  { id: 2, setup: 'Why did the math book look sad?', punchline: 'Because it had too many problems.' },
  { id: 3, setup: 'Why can’t your nose be 12 inches long?', punchline: 'Because then it would be a foot!' },
  { id: 4, setup: 'Why did the scarecrow win an award?', punchline: 'Because he was outstanding in his field!' },
  { id: 5, setup: 'Why don’t skeletons fight each other?', punchline: 'They don’t have the guts.' }
]

app.get('/api/joke', (req, res) => {
  res.json(jokes) // Send the array
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
