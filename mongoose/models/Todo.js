const mongoose = require("mongoose");

const ToDoSchema=new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean
});
module.exports= mongoose.model('Todo', ToDoSchema);