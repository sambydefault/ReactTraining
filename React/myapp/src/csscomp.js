import React,{Component} from "react";
import "./my.css";

export class CssComponent extends Component{

    a={
        color:'blue'
    };
    render(){
        return(<div><h1 class="MyClass">Css Header</h1>
        <h1 style={this.a}>Inline</h1>
        </div>);
    }

}