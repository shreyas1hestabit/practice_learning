import {React} from "react";
import { Component } from "react";
class Passdata extends Component{
    state={
        count: 0
    };
    render(){
        console.log("props",this.props);
        return(
            <div>
              {/**  <span className={this.getBadgeClasses()}>{this.formatCount()}</span> */}
                <button onClick={this.handleIncrements} className="btn btn-primary m-5">Increment</button>
            </div>
        );
        }
         handleIncrements = () =>{
            console.log('increment');
            this.setState({count: this.state.count + 1});
    }
}
export default Passdata;