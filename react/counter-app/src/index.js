import React from 'react';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'; //importing bootstrap library in our js.
//import Counters from './components/counters';
import Passdata from './components/passdata';
import Counters from './components/counters';

//ReactDOM.render(<Counter />,document.getElementById("root")) //counter class ko render kiya in root.
const root=ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(<Counters />);
//pehle wala code was not working qk woh purane version of js k saath compatible hai. for this version syntax is changed.
// pehle hm ek root node initialize krenge which tells js ki iss dom node ko react ka root maan lo. basically controller
//then usmein hmare div container ko call krenge by id which means ki jo bh render ho rha hai woh ab iss container ki help se web browser mein show hoga and real dom mein store hoga.
// then hmne render kiya our class. now earlier (previous project when we started) hm ek variable mein value store kra rhe the which we wanted to print to hmne variable ka naam brackets mein likha tha.
//iss case mein hm ek different file k class ko render krana chahte hai so pehle toh woh file ko import krenge then uski jo bh class hai which we want uska name likhenge in <> brackets with backslash to end the custom class.
//agr back slash nh likha toh class tag start toh ho rha hai but end nh will create an error.
