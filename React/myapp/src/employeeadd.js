import React,{Component} from "react";

export class EmployeeAdd extends Component{
    render(){
        return(<div> <input type="button" value="cancel" onClick={this.props.onCancel}/></div>);
    }
}