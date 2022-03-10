import React from 'react';   
import './App.css';  

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 

import Createrole from './CrudComponent/Createrole'  
import RoleList from './CrudComponent/RoleList'  
import EditRole from "./CrudComponent/EditRole" 

import User from "./CrudComponent/User";  
import AssignRole from "./CrudComponent/AssignRole" 

function App() {  
  return (  
    <div className="App">  
     <Router>    
      <div className="container">    
        <nav className="btn btn-warning navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >              
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/Createrole'} className="nav-link">Add Role</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/RoleList'} className="nav-link">Role List</Link>    
              </li>  
              <li className="nav-item">    
                <Link to={'/User'} className="nav-link">Users</Link>    
              </li>   
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>
        {/* <Route path='/' component={EmployeList} />     */}
          <Route path='/assign/role/:id' component={AssignRole} />    
          <Route path='/User' component={User} /> 
          <Route exact path='/Createrole' component={Createrole} />    
          <Route path='/edit/:id' component={EditRole} />    
          <Route path='/' component={RoleList} />

              
        </Switch>    
      </div>    
    </Router>    
    </div>  
  );  
}  
export default App;  