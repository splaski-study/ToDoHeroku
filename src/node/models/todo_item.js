const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for item To-Do-List

let todo_item = new Schema(
    {
        task: {
        type: String,
        match: /\w+/,
        required: [ true, 'Укажите задачу' ]
    },
        isActive: {type: Boolean, default: false}
    },
        { timestamps: { createdAt: 'created_at' }}
    );

let ToDo = mongoose.model('ToDo', todo_item);
module.exports = ToDo;