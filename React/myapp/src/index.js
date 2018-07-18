import React,{Component} from "react";
import ReactDOM from "react-dom";
import {Header} from "./header";
import {Content} from "./content";
import {EmployeeList} from "./employeeList";
import {EmployeeAdd} from "./employeeadd";
import {Employee} from "./employee";
import {Life} from "./life";
import {CssComponent} from "./csscomp";
import {Customer} from "./customer";
import {Supplier} from "./supplier";
import {BrowserRouter,Route, Link} from "react-router-dom";



class App extends Component{
    render(){
        
        return (        
        <BrowserRouter>
        <div>
        <header>
        <Link to="/customer">customer</Link>
        <Link to="/supplier">supplier</Link>
        </header>
        
        <Route path="/customer" component={Customer}></Route>
        <Route path="/supplier" component={Supplier}></Route>
        </div>
        </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
