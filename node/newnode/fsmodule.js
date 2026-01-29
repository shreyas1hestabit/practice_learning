// a very important module which alows us to work with files.
// fs -> file system
const fs = require ('fs');

//read file function -> used to read a file 
fs.readFile('file.txt','utf8',(err,data)=>{ //hmne fs module ka readFile method lgaya. iska pehla argument would be file name jo hm read krana chahte hai then file encoding fir hm ek call back function lgate hai ki error aya toh yeh print or koi error nh aaya toh data print.
    console.log(err, data) //dono err or data ko console log kr liya.
    //abh error aayega qk we have not created any file.txt so node k paas read krne k liye iss name ki koi file hi nh hai and data ki jgh undefined print hoga
    //when we created the file toh koi error nh aaya (null show hua) and the data of the file is printed.
})

//file sync
const a = fs.readFileSync('newfile.txt')
console.log(a) //sbse pehle iska output aayega then next console ka and then upar waale console ka.
//yha pr output stream ki form mein aata hai like kuch nos and alphabets ka combination. 
//agr hm string ko dekhna chahte hai mtlb the text content of the file toh we use tostring
console.log(a.toString()) 

console.log('finished reading the file') // jb hm isse run krenge toh we see ki yeh pehle print hoga and then readfile ka output even when jb hmne readfile ka code pehle likha tha and iska baad mein. 

//iska reason is ki file toh read hona shuru ho jayegi lekin callback tb work krega jb puri file read ho jayegi. 
//kyi baar hota hai jb intentionally block krna chahte hai funtion ko ki jbtk ek file read hok callback lg k output na aaye tbtk thread naye kaam pr na jaaye iss case mein hm readfilessync ka use krte hai

//ab agr mujhe kisi file mein kuch write krana hai to we use writeFile method
fs.writeFile('filewrite.txt',"file ko write kr rhe hai using method",()=>{ //filewrite mein 3 arg pass honge pehle file name then kya data write krana hai and lastly ek call back function to print after the data is written in the file
    console.log("written to the file")
}) //jaise hmne readfile k time pr kiya tha ki 2 args pass kiye the err and data agr whi cheez hm 
// isme krte hai toh err mein null show hota hai and data mein undefined qk fs sirf data write kr rha hai read nh kr paa rha abh bh. 
