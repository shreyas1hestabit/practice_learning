sbse pehle when we want to create a new folder where we want our react project we write command -> create-react-app our_project/folder_name
-this will automatically install all the modules and packages required with the react-app.
then we go inside the project and start our application using npm start.
-this will throw error because this command does not work for the version we have installed. start is an outdated command used in version17 and before. so we would use npx react-scripts start.
-this will throw an error because we dont have index.html in public and index.js in src folder. without these two files we cant run our react app.
next step is to install bootstrap. using command: npm i bootstrap@version_we_want
-this is a css library which gives our application modern look and feel.
now we import this library in our index.js using import 'bootstrap/dist/css/bootstrap.css' - i have a doubt that this dist/css will work coz video mein uska automatic folder name show ho rha tha and mera nh so maybe this is not the correct file path. we'll see.
now create a components folder in src -> this will contain all our components of the project.
-in this components folder create counter.jsx file.

<p style="color:red">- we are using .jsx instead of .js because .jsx gives better code completion.
--pta nh kya hota hai better code completion. dekhna pdega</p>
now lets start working on the files.

<h3>steps to do</h3>
<ol>
<li>import React and components from react.</li>
<li>create class- give it a name</li>
<li>return statement ko modify kiya acc to our needs.</li>
<li>abh k liye state waale code line ko hataya</li>
<li>class ko export kiya.</li>
<li>index.html and index.js likha</li>
</ol>

-agr hme multiple tags use krne hote hai in our class to print on our home page we need a parent element to wrap them into one.
-hm inn elements ko side by side nh likh skte hai as this generates an error.
-- error is generated coz babble compiles the return k andar ka code using React.createElement which needs 3 arguments: tags we are using(types),prop and children.
--when we are using multiple tags toh type confuse ho jata hai ki object ka kya type hai.
--solution to this is ki hm ek div bnaye jisk andr saare tags wrap ho jayenge and type will se this as ek div jisme multiple types hai.
--agr hm return k aage kuch nh likhte hai toh js already semicolon lga kr statement ko end kr deta hai.

--the only difference between div and react.fragments is the way they are stored in the page, basically structure of html is different in both the cases.
--div:
body -> div with id root -> another div with no id -> tags.
--react.fragments:
body -> div with id root -> both the tags

--we dont have if-else in jsx because it is not a templating engine.

--in js 'this' behaves differently from other languages.--> function of this is directly dependent on how a function is called. this can reference different objects depending on how a function is called.
obj.method()--> returns object of the function method.
function()---> calls the entire function and returns reference to the window object. but if it is in strict mode it returns undefined.
--to solve this problem of undefined we use bind method.
