const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const users = [
  {"id": 1, "name":"saba", "email": 'saba@.com'},
  {"id": 2, "name":"sabala", "email": 'sabala@.com'},
  {"id": 3, "name":"sabnoor", "email": 'sabnoor@.com'},
  {"id": 4, "name":"soon", "email": 'soon@.com'},
  {"id": 5, "name":"sani", "email": 'sani@.com'},
  {"id": 6, "name":"saza", "email": 'saza@.com'}
]

app.get('/users', (req, res)=>{
  res.send(users)
})



app.get('/', (req, res) => {
  res.send('node server is running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})