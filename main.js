import express from "express";

const app = express()

app.get('/', (req, res) => {
  res.json({msg : 'Hello World!'})
})

const port = 6969

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})

