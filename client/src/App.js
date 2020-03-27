import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from './privateRoute';
import home from './pages/home/home';
import landing from './pages/landing/landing';
import NavBar from './components/navbar/NavBar';
import noMatch from './pages/noMatch/noMatch';
import {useAuth0} from './react-auth0-spa';

function App(props) {

  const {loading} = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

      <div className="App">
        <header>
          <NavBar />
        </header>
      

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={landing} />
            <PrivateRoute path="/home" component={home} />
            <Route component={noMatch} />
          </Switch>        
        </div>
      </Router>
    
      </div>
  );
}

export default App;
