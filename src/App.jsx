import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home"; 
import Login from "./Login";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return(
        <> 
         <Navbar />
         <Switch> 
          <Route exact path="/" component={Home} /> 
          <Route exact path="/Login" component={Login} /> 
          <Route exact path="/Dashboard" component={Dashboard} /> 
           <Redirect to="/"  />
          <Home/>
         </Switch>
        </>
    );
};
export default App;