import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/home';
import Landing from './pages/landing/landing';
import NoMatch from './pages/noMatch/noMatch';
import {useAuth0} from './react-auth0-spa';
import Profile from './pages/profile/Profile';
import history from './utils/history';
import Logo from './pages/logos/logo';


function App(props) {

  const {loading} = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="App">
      <Router history={history}>
  
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/logo" component={Logo} />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} /> 
            <Route component={NoMatch} />
          </Switch>        
        
      </Router>
      </div>
  );
}

export default App;
