// src/components/NavBar.js

import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, getTokenSilently, getTokenWithPopup, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <>
        <button onClick={() => loginWithRedirect({})}>Log in</button>
        {/* <button onClick={() => getTokenSilently({})}>Get Token</button> */}
        </>
      )}

      {isAuthenticated && (
        <>
      <button onClick={() => logout()}>Log out</button>
      <button onClick={() => getTokenSilently({})}>Get Token Silently</button>
      {/* <button onClick={() => getTokenWithPopup({})}>Get Token With Popup</button> */}
       </>
      )}

      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;