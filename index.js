const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const users = [
  {id: 1,password:123, username:"saba"},
  {id: 2,password:123, username:"sabala"},
  {id: 3,password:123, username:"sabnoor"},
  {id: 4,password:123, username:"soon"},
  {id: 5,password:123, username:"sani"},
  {id: 6,password:123, username:"saza"}
]

app.get('/users', (req, res)=>{
  if(req.query.username){
    const search = req.query.username
       const filter = users.filter(us => us.username.indexOf(search) >= 0)
       res.send(filter)
  }else{

    res.send(users)
  }
})

app.post('/users', (req, res)=>{
  const user = req.body;
  user.id = users.length + 1
  users.push(user)
  res.send(user)
  // console.log(user);
})

app.get('/', (req, res) => {
  res.send('node server is running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})