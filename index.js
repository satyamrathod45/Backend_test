import express from "express"

const app = express()

const port = 3000

app.get("/home" , (req , res) => {
    res.send("working")
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})


app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.listen(port , () => {
    console.log(`lestining at port http://localhost:${port}/`)
})