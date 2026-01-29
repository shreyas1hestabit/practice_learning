//yha pr hm ek http server build krenge node js k andar with the help of http module.
const http = require('http')
//const port = process.env.PORT //hmare process ko jo bh port mil rha hai woh port hadap lo.
//yeh hm tb use krte hai jb hm aise platforms use krte hai jo serverless architecture dete hai like kubernetes toh agr aise cases mein hm janna chahte hai ki konse port pr hmari application run kre toh hm env variable set krte hai to a port lekin kbh kbh yeh port set nh hota like is case mein toh hm ek logical OR lgakr port specify kr dete hai.
const port = process.env.PORT || 3000 
const server=http.createServer((req,res) => { //hm ek server bna rhe hai using builtin method of http called createServer. and it uses a callback function jisme 2 args pass hote hai request and response.
     res.statusCode=200; //sbse pehle hm response ko serve krte hai
     //agr hmne http server pr koi request bheji and uspr koi response aaya usk corresponding ek server port hota hai jo btata hai ki response k saath kya hua, kya response ne server pr koi error create kiya,kya request k corresponding response aaya hi nh, kya response dete time koi bad request ho gyi etc.
     //bht saare statusCodes hote hai each with a specific meaning
     res.setHeader('Content-Type','text/html') //ab hm header set krenge. header hm bht saare set kr skte hai. content type se meri jo request hai woh html ki trh serve ki jayegi wrna woh plaintext mein print ho jayegi.
     //yeh basically yeh btata hai ki kis trh ka content server ne bheja hai.
     res.end('<h1>Learning nodejs</h1><p>almost done with node fundamentals</p>') //specifies ki hm kya response bhejna chahte hai
})
//server bn toh gya lekin abh jb hm chalayenge toh server chalega nh kyuki abh hmne sirf server bnaya hai hm usse kbh bh listen nh kr rhe hai mtlb basic server ko call toh kiya hi nh.

//for server listening
//server.listen(`server is listening on the port ${port}`) //yeh run toh krega lekin kuch print nh hoga qk isse hme console log krna hai for it to work and callback lgega and this method will take arguments.
server.listen(port,()=>{
    console.log(`server is running on port ${port}`) // abh port ki value would be undefined qk koi port assign hi nh kiya hai abh.
})