import React,{Component} from "react";

/* export const Life=()=>{
    return(<h1>React is awesome</h1>);
} */

export class Life extends React.Component{

state = {a:1}
componentWillMount(){
    console.log("Mount");
}

ChangeVal=()=>{
    console.log("Change Val");
    this.setState({a:this.state.a+1},function(){

    });
}

render(){
    console.log("render");
    return(<div><h1>{this.state.a}</h1><input type="button" value="change me" onClick={this.ChangeVal}/></div>);
}

componentDidMount(){

}

shouldComponentUpdate(){
    if(this.state.a%2 == 0){
        return true ;
    }
    return false;
}
}