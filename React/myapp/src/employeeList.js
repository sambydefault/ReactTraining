import React,{Component} from "react";

/* export class EmployeeList extends Component{

    
    GetEmployees(){
        return this.props.employees.map(
            x=>{
                return (<h1 key={x.FName}>{x.LName}</h1>)
            }
        );
    }

    render(){
        return(<div>
            <h1>Employee List</h1> 
            {this.props.employees.length}
            {this.GetEmployees()}
            <input type="button" value="Add New" onClick={this.props.onAddNew}/>
        </div>);
    }
}  */
    
    function GetEmployees(props){
        return props.employees.map(
            x=>{
                return (<h1 key={x.FName}>{x.LName}</h1>)
            }
        );
    }

    export const EmployeeList =(props)=>{
        return(<div>
            <h1>Employee List</h1> 
            {GetEmployees(props)}
            <input type="button" value="Add New" onClick={props.onAddNew}/>
        </div>);
    }
