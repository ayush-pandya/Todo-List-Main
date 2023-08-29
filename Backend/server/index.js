    
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { createTodo, getTaskList} = require('./DataBase/dataLayer');

const app = express()
const jsonParser = bodyParser.json()
app.listen(4000, (res) => {
    console.log('Listening on port 4000')
})
app.use(cors({
    origin: 'http://localhost:3001',
}))
app.get('/', async (req, res, next) => {
    const taskList = await getTaskList()
    res.send(taskList);
    next();
  })

app.post('/add',jsonParser,async (req, res,next) => {
 const response = await createTodo(req.body);
    res.send(response);
    next();
})