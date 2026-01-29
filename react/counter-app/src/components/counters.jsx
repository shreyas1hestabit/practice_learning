//so far we were working with single components, react is used when we need to work with multiple components or a complex tree structure. so in this part we will learn how to work with multiple components.
import React, {Component} from 'react';
import passdata from './passdata';
import Passdata from './passdata';

class Counters extends Component{
    state={
        counters: [
            {id:1, value:0}, //each counter component will have a unique id and a value assigned to it. for now we are setting value to 0, will upadte it in future.
            {id:2, value:0},
            {id:3, value:4},
            {id:4, value:0}
        ]
    };
    render(){
        return( <div>
        {/**   
         *  <Counter/>  {/*this will render counter.jsx k counter components. */ } 
           {/** <Counter/>    {/*we can reneder it multiple times and each component will work independently. */}

           {/**instead of hardcoding multiple counter components like we did above we can add array of counter objects to our state property and render thm using the map method. */}
           {/* {this.state.counters.map(counter=><Counter key={counter.id}/>)} {/**mapped counters to counter with id key */}
            {/**abh hm jo kr rhe hai usse multiple counters toh display ho rhe hai acc to the no of ids we have created but jaise hmne hr ek id k aage ek value store ki hai woh nh show ho rh. saare counters are working from 0 . jaise maine id 3 ki value store ki 4 toh bh it will work from 0 and not 4. so now we will look on how to pass data into components*/} 
            {this.state.counters.map(counter=><Passdata key={counter.id} value={counter.value} selected={true}/>)} {/**value and selected are the props of the counters array. so when we render props in counter.jsx these two objects will be displayed.  */}
            {/**UNDERSTAND THIS MORE. ABH UPAR UPAR SE SMJH AYA HAI */}
        </div>);  //div will be our wrapper or container for all of our render items.
    }
}
export default Counters;