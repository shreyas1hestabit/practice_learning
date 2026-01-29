function sayHello(name){
    console.log('hello' + ' '+ name); //console is a global object i.e. we can access it anywhere in any file.
}
sayHello('shreya')

//hm jitne bh objects hai in node unko dekh skte hai using global. global contains all the objects of node like console, settTimeOut etc. but suppose hmne koi object banaya suppose message toh woh global k scope mein nh aata coz uska scope is the file jisme hmne usse create kiya hai. agr hm iska console.log using global toh we see an output stating undefined.
var message = "checking the scope of this variable"
console.log(global.message);

//console.log(global) //prints all the objects with a global scope in terminal.
//console.log(module); //this app.js is a module and when we run this code we get a json object module with various key value pairs like id, path, exports etc which contains the details of the module.

//we will load and use the log function created in logger module.
//to load a module we need a function called require().
import logger from './logger.js';
console.log(logger);
