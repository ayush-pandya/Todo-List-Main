const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/TodoList');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    body: String,
    date: { type: Date, default: Date.now },
    completed: Boolean,
    urgency: Number
});

const TodoListModel = mongoose.model('Todo', TodoSchema);
export async function createTodo(body, completed, urgency) {
    const todoExist = await TodoListModel.find({body: body}).then((res) => {
        if(res.length === 0) {
            return true;
        } 
        else {
            return false
        }
    })
    if(todoExist) {
    TodoListModel.create({"body":"test","completed":false,"urgency":1}).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.error(err);
    })
}
}


async function owner(Name) {
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