//ab hm node ki ek built in module which is os ko import krenge
const os = require('os') //yha hmne ./ nh lagaya hai qk yeh hm tb lgate hai jb hm custom module ko import kr rhe ho from our folder/system lekin jb hm node ki built in module ko import krte hai we dont need this.
 console.log(os.freemem()) //yeh ek method hai of os module jisse hm hmare system ki free memory ko dekh skte hai. 
 //again agr me () use nh krungi toh object type return hoga but for method to run i need to put () at the end of method.
 console.log(os.homedir()) //yeh user ki home directory ko show krta hai.
 console.log(os.hostname()) //yeh computer k hostnam eko print krata hai
 //we can check all the methods of the module in node documnentation.