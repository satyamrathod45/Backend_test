import express from "express"

const app = express()

const port = 3000



app.get("/" , (req , res) => {
    res.send("<h1> Hello wrole </h1>")
})

app.get("/jokes" , (req , res) => {
    
const jokes = [
  {
    id: 1,
    question: "Why don’t scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    id: 2,
    question: "Why did the computer go to therapy?",
    answer: "Because it had too many bytes of emotional baggage."
  },
  {
    id: 3,
    question: "Why do programmers prefer dark mode?",
    answer: "Because light attracts bugs."
  },
  {
    id: 4,
    question: "What do you call 8 hobbits?",
    answer: "A hob-byte."
  },
  {
    id: 5,
    question: "Why was the JavaScript developer sad?",
    answer: "Because he didn’t Node how to Express himself."
  },
  {
    id: 6,
    question: "Why do Java developers wear glasses?",
    answer: "Because they don’t C#."
  },
  {
    id: 7,
    question: "How many programmers does it take to change a light bulb?",
    answer: "None, that's a hardware problem."
  },
  {
    id: 8,
    question: "Why did the developer go broke?",
    answer: "Because he used up all his cache."
  },
  {
    id: 9,
    question: "What’s a programmer’s favorite hangout place?",
    answer: "The Foo Bar."
  },
  {
    id: 10,
    question: "Why couldn’t the React component understand the joke?",
    answer: "Because it didn’t get the context."
  }
];
    res.send(jokes)
})

app.listen(port , () => {
    console.log(`lestining at port http://localhost:${port}/`)
})