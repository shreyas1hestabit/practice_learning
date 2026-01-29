var url= 'https://mylogger.io/log'; //we are sending a http request to this url. 
function log(message){
    //send an http request
    console.log(message);
} 
//both the function and the variable are locally scoped. so if we want to use it in app.js which is our main module we need to make this public.

module.exports.log=log; //waise agr me exports object dekhti hu iss module ka toh uski value is blank {}. isme woh values show hoti hai jo hm export krna chahte hai taaki woh dusri files mein use ho ske.
//module.exports.endPoint=url; // endpoint is the name jo hm dusri files mein use kr skte hai and url is the var name which is used in this file.