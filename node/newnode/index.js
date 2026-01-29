console.log("hello world")

//to access second.js in index.js
// import { tryImport } from "./second.js";
// value = function() {
//     tryImport();
//     console.log('working perfectly');
// } 
//this method does not work qk yeh js es6 ka type hai to import and node ka syntax nh

const value = require("./second") //second.js file jo bh de rh hai usse import krk iss file mein le aao and store under varibale value.
console.log(value);
//yeh consoel.log(value ka output would be undefined coz hm function k andar kuch bh return nh lra rhe hai toh value mein koi specific cheez store hi nh ho rh hai. toh jb hmne function call kiya function chl k output de diya lekin jb hmne function ka return value mein store kiya toh undefined aaya qk function mein kuch return tha hi nh.)
const ss=require("./second") //yeh second se shreya ko import krega and uss object ko print krak ss mein store krega
console.log(ss); //yaha object jo ki ss mein store hua hai woh dubara print ho jayega.
//yeh upar k dono lines se same hi output aa rha hai.

console.log(exports,require,module,__filename,__dirname) //yeh iss file ki yeh saari details dedega.
