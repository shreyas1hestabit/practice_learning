const EventEmitter = require('events'); //builtin event package ka use kiya hai
class MyEmitter extends EventEmitter{} 
const myEmitter = new MyEmitter(); //new myEmitter class is created
myEmitter.on('waterFull',() => { //this function states ki jb bh waterfull name ka koi event aa jaye toh log krna hai message.
    console.log('please turn off the motor!');
    //using another set of code in this event calling
    setTimeout(() => { //this message will run after 3 seconds.
        console.log("please turn off") 
    },3000);
});
//yeh teeno code async mein chalenge. pehle waterfull ka pehla log hoga then uska second log will be after 3 sec so script waale dono console chalenge and after 3sec event ka settimeout ka console chl jayega.
myEmitter.emit('waterFull');
console.log("the script is running");
console.log("the script is still running")
