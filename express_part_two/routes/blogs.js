const express = require('express')
const path=require('path')
const router= express.Router()
const blogs=require('../data/blogs')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})
// router.get('/blogs',(req,res)=>{
//     // blogs.forEach(e=>{  //forEach se we are trying to say ki blogs k hr ek item pr kaam kro
//     //     //we have assumed ki blogs=[{title:"...", content:"..."},{title:"...",content:"..."}]
//     //     console.log(e.title) //har blog k title print ho rha hai. yeh browser mein kuch nh bhej rha hai sirf server k terminal mein dikhega.
//     // })
//     res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
//})

//jo upar wala code part hai usse jo hmara blogs ka data hai uska title sirf console pr show ho rha tha and url mein html show ho rha tha
//to render contents of data/blogs.js
router.get('/blogposts/:slug',(req,res)=>{
   myBlog= blogs.filter((e)=>{   //ek aisa element return krte ho blogs mein se jo iss function k liye true return kre.
        //e.slug==slug
        return e.slug==req.params.slug
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
})
module.exports=router