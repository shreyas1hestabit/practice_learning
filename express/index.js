const express = require('express');
const path=require('path');
const app = express();
const port=3000;

//MUJHE MIDDLEWARES NH SMJH AAYA HAI.
//we are using this for middlewares
// app.use(express.static(path.join(__dirname,"public"))) //express.static is a built in method for middlewares.

// //if we want to create our own custom middleware
// const learnMiddleware=(req,res,next)=>{
//     res.send('we are creating custom middlewares')
//     //next()
// }

//app.use(learnMiddleware)
//this is not working
// app.get('/middle', learnMiddleware,(req,res)=>{
//     res.send('learning to create custom middlewares')
// })

app.get('/wel',(req,res)=>{
    res.send('Welcome to the Express App')
})
app.get('/about',(req,res)=>{
    res.send('We are learning how to code in express');
    res.status(500) //this will not set the status to 500 coz yeh bht late chl rha hai ek response already chla gya hai and status is set. toh status change nh hoga and it will not display status to 500.
})
app.get('/learnfile',(req,res)=>{
    //res.status(500) //file bh jaa rh hai and status bh 500 set ho gya hai.
    //suppose hme koi html file respone mein bhejni hai so instead of res.send hm res.sendFile ka use krte hai.
    res.sendFile(path.join(__dirname,'index.html')) //file bhejne k liye hm path module ki help lete hai 
    //isme 2 args pass honge directory ka name and file ka name.
    //dir name server ko btata hai ki jo file hai woh konse folder ya hard disk mein kaha pr hai. hmare system mein same name ki multiple files ho skti hai ya nh bh hongi toh server kha tk system ko dhundega so we need to first use __dirname which extracts the directory of the file.
    //path.join ka kaam hota hai ki folder or file ko safely join kre and correct full path mil jaye server ko.
})
app.get('/err',(req,res)=>{
    res.status(500) //agr hm chahte hai custom status bnana then we use res.status and 500 is the status code. hm isme kuch bh daal skte hai.
    //yha pr qk maine alag se ek page bnaya hai jisme me status code set kr rh hu toh jb me iss page pr redirect krungi toh woh load hota rahega and kuch bh page nh aayega and system will crash.
    //the final correct way to send status code
    res.status(500).json({error: "internal server"})
    //or
    //res.sendStatus(500)

})
app.get('/jsonobject',(req,res)=>{
    res.json({"shreya":22}) // if i want to display a json object in the page so we send json.
})

app.listen(port,()=>{
    console.log(`We are listening at http://localhost:${port}`)
})