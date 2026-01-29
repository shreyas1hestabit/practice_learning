import React from "react";
import { Component } from "react";
class Counter extends Component { //we have created a counter class that extends the component class that we have imported at start from react.
    //state = {  }
    //we are not working on state for now. will look afterwards. 
    //suppose hme koi value hard code nh krni and we want a dynamic value. jaise hmne neeche h1 ko specific value khudse di hai suppose we dont want that and want a dynamic value to be displayed in h1 tag. iss case mein we use state
    //isk liye we create a property called state and set it to an object.
    state= {
        //isme hm kuch properties add krenge like count jiski value is 0 and ek address property jismein complex values hai.
        //count:0, //now we want to use the value of count which we initialized in counters.jsx so instead of hardcoding count=0 we will set the value of count to:
       // count: this.props.value, //yeh yaha nh chl rha hai, raising an error stating uncaught runtime error. maybe because hmne bht jgh count ko call kiya hua hai. so to try this method creating another jsx file.
        //address:{
          //  street:''
        //}
        imgUrl: 'https://picsum.photos/200', //this will randomly generate a 200x200 ka photo
        tags: ['tag1','tag2','tag3'], //this property is created because we want to render lists. so we create an array with lets say 3 items.
        anotherTags: []
    };
    //state is a special property in react components, basically it is an object that stores data that this component may need.
    styles={
        fontSize: 30,     //these are just css properties written in camel case.
                          // jsx mein hm sirf numbers likhte hai and usk dimensions react apne aap le leta hai. 
                          // like jb hm css mein font size likhte hai toh we write 10px but in jsx we can just write 10.
        fontWeight: 'bold',
        margin: 20

    
    }
    render() { 

        //console.log("props",this.props); //props are js object. yeh code displays the props of the counters array we created in conuters.jsx. 


        //return (); modify this statement to a simple html like we did previously
        //return <h1>Hello World!</h1> // this h1 is a jsx object which gets internally compiled usind React.createElement method of react library.
        //now we want to add a button along side our h1 tag so updated code will be.
        //<h1>hello world! </h1><button>increment</button>
            //this will generate an error because we are using two tags simultaneously without a parent element. jsx always need a parent element when we work with multiple elements/tags.
            //we need a parent element because this expression will be compiled by babble using react.createElement. 
            // return <div><h1>hello world</h1><button>increment</button></div>
            
            //now another way by which we can wrap these multiple tags into one is : fragments.
            //hmne jo react module import ki hai uska ek child hota hai react.fragments- this works like div only so we can replace div with this.
            
            //yeh jo 2 lines hai yeh sirf hmare code ko colour btati hai and inko render mein rkhne se sirf hmara render method pollute ho rha hai coz isme aise codes use ho rhe which have nothing to do with rendering. 
            // so hm inki seperate method bna denge so that they are kept different and does not affect the code.
            //let classes= "badge m-2 badge-"; /*//yeh woh values hai which we want in all cases chahe blue chahe yellow.
            //classes+=(this.state.count===0)? "badge-warning":"badge-primary"; //YEH PART OF CODE MERE PALLE NH PDA WHY DID WE USE +=
            //we can make this code look more clean by not writing badge- again and again and mention it once in classes.*/
            /*//jb hme blue badge bnana hota hai we use badge-primary and yellow k case mein badge-warning. these are defaults which we are using.*/
            //classes+= this.state.count===0 ? "warning":"primary";
            return (
            <div>
                <h1>hello world!</h1>
                <span>{this.state.count}</span> {/*ab hm dynamic values store krayenge.
                                                    this -> reference to current object
                                                    state-> we are using state defined above
                                                    count-> state ki count waali property.
                                                    yeh jo {} jisme hmne this.state.count likha hai isme hm koi bh valid js expression likh skte hai 
                                                    as js expression is something which produces a value.*/}
                <span>{2+2}</span> {/**js expression which performs addition operation. */}
                {/**hm chahe toh isme koi function bh call kr skte hai which returns a value. */}
                <span>{this.formatCount()}</span> {/**jo neeche formatCount fucntion create kiya hai usse call kr rhe hai yaha. */}
                <button className="btn btn-secondary btn-sm m-2">increment</button> 
                {/**now we want some attributes in our web page */}
                <img src={this.state.imgUrl} alt=""></img> {/**we want a dynamic value in this src. so again go to state create property and call it here */}
                {/**jb hm src mein property call krenge toh remove quotes and put braces coz we know ki braces are used to render any value dynamically */}
                <span className="badge badge-primary m-2">{this.formatCount()}</span> {/**idhar hmne ek class define krk usme bootstap properties ko call kiya hai 
                                                                                    *for styling purposes. LEKIN ISS CODE MEIN JO YEH CLASSNAME K BAAD HAI WOH MUJHE DHNG SE SMJH NH AAYA.
                                                                                    BASIC USE SMJH AA GYA BUT WHY ALL THIS AND UNCLE NE KUCH TOH CLASSNAME KA BH BOLA THA PTA  NH KYA. */}
            {/**i think yeh classname default property hai to use bootstrap css because jb maine upar increment button pr isse use kiya then it worked perfectly fine and margin create ho gyi. */}
            {/**yeh uncle ne fir se kuch toh classname ki jgh style use krne ko bola hai-NO IDEA WHAT. Gibberish he speaks
             * mujhe bs yeh smjh aaya hai ki hm style attribute ko use kr skte hai in jsx. all we need to do is create a style property call it styles and usme saari styling krk call it in the style attribute.
             */}
            
            <span style={this.styles} >Try Styles Attribute</span>
            {/**now there can be cases when we want to apply styles to multiple elements so we would not want to specify multiple properties in this class.
             *  so iss case mein hm inline style ka use kr skte hai. */}
             <span style={{fontSize: 20, color:'white', backgroundColor:'black'} }>TRY INLINE STYLES</span>

              {/**now we will work with rendering classes dynamically. */}
            {/*/**suppose hmne ek variable banaya jiska if value is zero the bg-color changes to yellow to display warning else it is blue. */}
            
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            {/** now we will work on rendering lists*/}
            <ul>
                
                    {/**now we want to render the tags we created in this ul. for this purpose we use map to render tags one by one.*/}
                    {/**{this.state.tags.map(tag => <li>{tag}</li>)} */}{/**what we are doing is ki hm ek map function use kr rhe hai to map elements of tags into a bunch of list of items one by one 
                     * tag is a string and we are mapping it to a jsx expression <li />
                    then in this jsx expression we want to render tags dynamically so we write {tag} inside <li/>*/}
                    {/**this will work but agr hm console dekhte hai toh an error stating - each child in a list should have a unique "key" prop is displayed. 
                     * this error is displayed because react needs to uniquely identify each tag in the list. this is necessary coz agr virtual dom mein kuch bh change hota hai toh react needs to sync it with the real dom jisk liye it needs unique ids to see ki konsa tag change hua hai. 
                    so the code updates and we define a key for every tag using key*/}
                    {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
                
            </ul>
            

            {/**now we will work on conditional rendering. suppose hmne ek list mein tags render kiye. we want ki agr uss list mein ek bh tag hai toh it displays the tag else it displays a message stating there are no tags.*/}
            {/**there are 2 ways to do this one being ki hm ek function bnaye usme tags ki length ko render krk usko if else condition mein daale */}
             <span>{this.renderTags()}</span>
            {/**another way to condition rendering is: suppose hme ek alag se if statement lgani hai except for renderTag() waali toh hm hmare html tag k saath if condition likhenge but this wont contain any else. this works only when there is only one single if condition and no else to it. */}
            {this.state.anotherTags.length===0 && "please create a new tag for anotherTags."} {/**this line says that if array length is zero add another additional message. */}
            {/**and operator se pehle waala jo code hai uski value would be true which is a boolean and && k baad wala is a string. now js allows logical operations between strings and booleans
             * how it works is ki woh string ko truthy ya falsy mein convert krta hai. if string is empty then it is considered as falsy else it is truthy and then it performs logical operation between true and truthy in this case it would return the second operand.
             */}

             {/**now we will look at event handlers. there are various pre defined properties of event handlers.
              * how to use them: button ya jaha bh event handler bnana hai udhar appropriate property use kro as per need like onclick then ek function bnao and usme kaam krao jo aapko chahiye ki button click krne pr ho then uss function ko call kro in onclick event handler.
               */}

               <button onClick={this.handleIncrement} className="btn btn-secondary m-2">Increment button</button> {/**agr me this.handleIncrement k aage brackets lga deti hu like hm function calling mein lgate hai then it acts as a fucntion and jb bh page reload hoga the function will be called and button click krne pr koi special event handle nh hoga meaning koi increment nh hoga. it will then act as a normal function so we dont add brackets when we are working with event handlers. */}
             <button onClick={this.handleError} className="btn btn-primary m-4">Error Function button</button>
             <button onClick={this.handleIncrementNew} className="btn btn-danger m-6 p-5">Updating count</button>
             <button onClick={this.handlePassArg} className="btn btn-info m-4 p-4">passing arguments</button>
             </div> 
        ) ; 
    }

//now there are times when we want to pass a function a value to our button. suppose we are creating a shopping cart and we want to update the value of cart every time we click on an object. so we cant hard code it.
//YEH NH SMJH AAYA HAI MUJHE SO LEFT THIS PART IN BETWEEN.
handlePassArg = () => {
    console.log('passing arguments');
}
   /* constructor(){
        console.log('Constructor',this)
    }*/
   //this will throw an error as we can not call the constructor of child class which is counter in our case without calling parent class, component in our case using super.
   
   /*constructor(){
    super();
    console.log('Constructor',this);
   } */
  //now we can see in console that our constructor has access to counter object. 

  //this is the opportunity to use bind method
  constructor(){
    super();
   // this.handleIncrement.bind(this); //function in js are objects and each object have properties and methods. one of them is bind. with bind we can set the value of this, so new instance of handleIncrement function is created and it will always return current reference of object.  
// the bind method returned a new function of function handleIncrement, we can use that function and reset our handleIncrement
this.handleIncrement = this.handleIncrement.bind(this); //with this we will be able to update state property.
}
//the only problem with this method of binding event handlers is that it gets noisy and messy to maintain when we have multiple functions because we need to create a constructor for each function call its parent each time and then bind it for every single function explicitly.

//so to solve this problem we have another method where we create an error function instead of constructors, this method is in experimental state currently and may break in future.

handleError() {
    console.log('we are trying binding event using error function',this)
}

    handleIncrement(){
        console.log('onclick event handler- increment clicked');
    }

    handleIncrementNew = () =>{
        console.log('incrementing', this);
        //in js we cant use traditional way of incrementing like this.state.count++ rather we use one of the methods that we inherit from the base component in react.
        this.setState( { count: this.state.count + 1}) //this method tells react that we are updating the state and then it figures out which part of the state we are updating and based on this it brings the dom in sync with the virtual dom. 
    } 
//jaha jaha hmne count property use ki hogi waha waha count ki value update ho jayegi.
    renderTags(){
       if (this.state.tags.length===0) return 'There are no tags!' 
             {/**you could also return a paragraph instead of plain teext. your wish basic if else hai your wish ki kya return krna hai if true. */}
        if (this.state.tags.length!=0) return <p>The no of elements in the list are: <h3>{this.state.tags.length}</h3> </p> 
        else return 'NO TAGS';
        {/**ek method k  andar ek hi if else ka loop ho skta hai when i tried two toh second wala loop was not working. react ne uss pr koi react hi nh kiya.*/}
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes+= this.state.count === 0 ? "warning":"primary";
        return classes;
    }
// hm fuction calling try kr rhe hai ab. lets create a method in this class which calls a value .
formatCount(){
// return this.state.count===0 ? 'zero' : this.state.count; // agr state k count ki value 0 hai toh return zero else jo value hai woh.
//jb hmare paas aisi koi situation hoti hai when we are using same property more than once -> this is perfect case to use object destructuring.
const {count}=this.state; //this.state ki count property ko use kr rhe hai hm. we are picking up count property from this.state and storing it seperately in constant called count.
//return count === 0 ? 'zero':count;
//we can also return jsx expressions as they get compiled to react element.
return count===0 ? <h3>ZERO</h3> : count;
}
}

 
export default Counter;
//line 3 mein hmne ek class define ki named counter and then line 12 mein usse export kiya.