import express from "express";

const app = express()

app.get('/', (req, res) => {
  res.json({msg : 'Hello World!'})
})

//CRUD Operation
//C - For creating
app.post('/movies', (req, res)=>{})

//R - For Reading
app.post('/movies', (req, res)=>{})

//U - For Updating
app.post('/movies:id', (req, res)=>{})

//D - For Deleting
app.post('/movies:id', (req, res)=>{})

const port = 6969

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})

