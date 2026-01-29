//the React object provides access to core React features like difining components and use of Hooks.
import React from "react";//importing React object from react module. 
//import ReactDOM from 'react-dom'; //provides dom specific methods to render react components to web browser's DOM
//yeh react version 17 and usse pehle waale versions mein kaam krta tha. hmne naya version install kiya hai so updated code goes:
import ReactDOM from "react-dom/client";
const element= <h1>Hello World</h1>; //ek variable banaya 'element' using const or usko value di hello world.
//babble will compile all this down to react.createElement
//React.createElement; -->yeh use toh kiya tha then remove kr diya. WHY?
//react.createelement is method to create react elements 
//this function is part of react module.
//okay so react.createElement hme explicitly nh likhna hota. yeh automatic function hai jiska kaam is:
    //jb hm react me jsx likhte hai like <h1>hello world</h1> toh react isko html nh maanta and react converts this into javascript object. using react.createElement.
    //isk mainly 3 arguments hote hai: type,props, ...children
//console.log(element);

//abh jb hmne element bnaya toh woh virtual DOM ka part tha but we need to render it into real dom jisk liye hmne reactdom ko import kiya hai.
//ReactDOM.render(element,document.getElementById('root'));
//hmne reactdom k render function ko call kiya to render object from virtual dom and store it in real dom.
//isme 2 arguments pass hote hai pehla hme kis object ko real dom mein daalna hai -> in our case it is element variable we created
// and second kaha dalna hai. so for that we used vanila js ka method to get the id of the container where we want to store.
//index.html mein hamare paas ek container with class root where we want to store and display our elemnent. 
//yeh jo upar code likha hai this is not compatible with the version we have installed coz usme render function hai hi nh. so the updated code goes:
const root= ReactDOM.createRoot( //is dom node ko react ka root maan lo isse browser dom react k control mein aa jata hai.
//root ek real React Root object hai basically root acts as remote control of react.
    document.getElementById("root") //browser k html dom me root wala element dhoondta hai. React ab iss empty div k andar kaam krega and hm jo bh likhenge woh isme jayega and web browser pr display hoga.
);
root.render(element);
//iss code se main 4 cheeze ho rh hai:
    //1. react element ko pdta hai.
    //2. virtual dom bnata hai.
    //3. react dom k saath compare krta hai.
    //4. browser mein actual hmtl inject krta hai.