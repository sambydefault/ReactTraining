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
import {createStore} from "redux";

const MyReducer =(state={a:1},action) =>{
    if(action.type==="Add"){
        state={...state,a:state.a+action.payload};
    }
    else if(action.type==="Sub"){
        state={...state,a:state.a-action.payload};
    }
    return state;
}

let store = createStore(MyReducer);
store.subscribe(()=>{
    console.log("A",store.getState());
});
store.subscribe(()=>{
    console.log("B",store.getState());
});
store.dispatch({type:"Add",payload:12});
store.dispatch({type:"Add",payload:14});
store.dispatch({type:"Sub",payload:10});



/* class App extends Component{
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

ReactDOM.render(<App />,document.getElementById('root')); */
