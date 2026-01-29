//iss file mein hm import krna seekhenge.
//hmara kaam hai ki hm index.js mein second.js k content ko access krna chahte hai.
//try khud se
function tryImport(){
    console.log('accessing content of second in index.')
}

//export default tryImport(); 
//hm node mein aise export nh krte yeh js es6 ka code syntax hai node mein we use require in the file jaha hme yeh file import karani hai. and to export hm yeh code use krte hai.
module.exports = tryImport(); //agr me sirf tryImport likhti hu without () toh console hota hai tryimport ka type which is function so output looks like [Function: tryImport]. and jb me brackets lagti hu toh yeh function k andar jo bh hai woh run ho kr index.js mein jata hai.

shreya = {
    age: 22,
    location: "noida"
}
module.exports=shreya;

console.log(exports,require,module,__filename,__dirname) //to check the values of module wrapper for this file.