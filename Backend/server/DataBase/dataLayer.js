const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/TodoList');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    body: { type: String, required: true },
    date: { type: Date, default: Date.now },
    completed: Boolean,
    urgency: Number
});

const TodoListModel = mongoose.model('Todo', TodoSchema);

async function createTodo(taskBody) {
    const body = taskBody.body;
    try {
        const todoExist = await TodoListModel.find({ body: body }).then((res) => {
            if (res.length === 0) {
                return true;
            }
            else {
                return false
            }
        })
        if (todoExist) await TodoListModel.create({ "body": body, "completed": false, "urgency": 1 }).then((res) => {
            return res;
        })
    } catch (err) {
        return `Todo must have a body. ${err}`;
    }
}

async function getTaskList(){
    const taskList = await TodoListModel.find({completed: false});
    return taskList;
}
async function editTask(){
    const taskList = await TodoListModel.updateOne(,{completed: false});
    return taskList;
}
async function addOwner(Name) {
    // Create a new mongoose model
    const personSchema = new mongoose.Schema({
        name: String
    });
    const Person = mongoose.model('Person', personSchema);

    // Create a change stream. The 'change' event gets emitted when there's a
    // change in the database
    Person.watch().
        on('change', data => console.log(new Date(), data));

    // Insert a doc, will trigger the change stream handler above
    console.log(new Date(), 'Inserting doc');
    await Person.create({ name: Name });
}
module.exports = {
    createTodo,
    addOwner,
    getTaskList
};