import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Home from './pages/home/home';
import Landing from './pages/landing/landing';
import NavBar from './components/navbar/navbar';
import NoMatch from './pages/noMatch/noMatch';
import {useAuth0} from './react-auth0-spa';
import Profile from './pages/profile/Profile';
import history from './utils/history';


function App(props) {

  const {loading} = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route component={NoMatch} />
          </Switch>        
        
      </Router>
      </div>
  );
}

export default App;
