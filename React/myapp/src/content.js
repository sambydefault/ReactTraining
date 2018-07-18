import React,{Component} from "react";

export class Content extends Component{
    constructor(){
        super();
        this.myval="Sam";
        this.state={name:this.myval};
    }
    clickHandler=()=>{
        this.myval="Jack";
        this.setState({name:this.myval});
    }
    render(){
        let val = Date();
        return(<div>
            <h1> from content by {this.myval} on {val}</h1>
            <input type="button" value="Click me" onClick={this.clickHandler}/>
        </div>)
    }
    doSomeWork(passedVal){
        alert(passedVal);
    }
}