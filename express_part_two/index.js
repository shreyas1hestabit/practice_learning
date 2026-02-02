const express = require ('express')
const path= require('path')
const app= express();
const port=3000;

app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'routes/blogs.js')))

// app.get('/',(req,res)=>{
//     res.sendFile()
// })
// app.get('/about',(req,res)=>{
//     res.send('we are working on second part of express')
// })
// app.get('/jsobject',(req,res)=>{
//     res.json({"express":"part_two"})
// })
// app.get('/health',(req,res)=>{
//     res.status(404).send("OOOOPPSSS!!!!")
// })
// app.get('/welcome',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
// })
app.listen(port,()=>{
    console.log(`We are blogging on http://localhost:${port}`)
})
