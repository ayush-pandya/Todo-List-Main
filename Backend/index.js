    
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.listen(4000, (res) => {
    console.log('Listening on port 4000')
})
app.use(cors({
    origin: 'http://localhost:3000',
}))
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/add', (req, res) => {
    console.log(req.statusCode)
    res.send("Success");
    // createTodo(req.body.body, req.body.completed, req.body.urgency)
})