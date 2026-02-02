const mongoose = require('mongoose');
const express = require('express');
const app =express();
const port=3000;
const Todo = require('./models/Todo');
//let a = await mongoose.connect("mongodb://localhost:27017/todo")
(async()=>{
    try{
        let conn = await mongoose.connect("mongodb://localhost:27017/todo");
        console.log("mongodb connected")
    }
    catch(error){
        console.log("eroorr", error)
    }
})();
app.get('/',(req,res)=>{
    const todo = new Todo({title:"first todo", desc:"mongoose learn", isDone: false})
    todo.save()
    res.send('Helloooo')
})
app.listen(port,()=>{
    console.log(`we are listening on port ${port}`)
})