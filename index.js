require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('<h1>Hello Ayush bhai kaise ho?</h1>')
})

app.get('/login', (req, res) => {
  res.send("khushi")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})