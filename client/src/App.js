import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from './privateRoute';
import home from './pages/home/home';
import landing from './pages/landing/landing';
import navComponent from './components/navbar/navbar';
import noMatch from './pages/noMatch/noMatch';
import { AuthContext } from './context/auth';

function App(props) {


  return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={landing} />
            <PrivateRoute path="/home" component={home} />
            <Route component={noMatch} />
          </Switch>        
        </div>
      </Router>
    
  );
}

export default App;
