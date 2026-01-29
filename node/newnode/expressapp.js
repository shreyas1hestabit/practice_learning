//ab hm dekhenge ki jo cheez hm http server se kr rhe the woh hm express se kaise kr skte hai and what is the difference.
//jb hmne http request use kiya tha toh hm ek ek cheez manually kr rhe the get, post but yaha cheeze easy to understand and simple to use hai qk sb kuch readymade hai.
//http server mein jb hme multiple end points define krne hote hai toh hm if else use krte hai with every end point ka case this makes the code look messy and complicated to understand.
//yha pr woh sb krne ka load nh hai. all we can do is ki ek or app.get call krle with diff end point.
const express= require('express')
const app= express()
const port= 3000
app.get('/', (req,res)=>{
    res.send('hello world')
})
app.listen(port,()=>{
    console.log(`example app for express listening at http://localhost:${port}`)
})