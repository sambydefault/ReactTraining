import React,{Component} from "react";
import {EmployeeList} from "./employeeList";
import {EmployeeAdd} from "./employeeadd";

export class Employee extends Component{

    employeeval = [ {FName:"sam",LName:"swain",Age:20}];

    constructor(){
        super();
        this.state={IsAddNew:false};
    }

    displayHandlerShow=()=>{
        this.setState({IsAddNew:true});
      }
      
      displayHandlerHide=()=>{
          this.setState({IsAddNew:false});
      }
  
      showHTML = () =>{
          if(!this.state.IsAddNew){
              return(<EmployeeList  employees={this.employeeval} onAddNew={this.displayHandlerShow}></EmployeeList>);
          }
          else{
            return(<EmployeeAdd  onCancel={this.displayHandlerHide}></EmployeeAdd>);
          }
      }  

    render(){
        return (
        <div>
            <hr/>
           
            {this.showHTML()}
        </div>);
        }
} 