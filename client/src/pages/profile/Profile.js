
// src/components/Profile.js

import React, { Fragment } from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import Can from '../../utils/Can';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (


    <Can
    role= {user["https://ruum-media/role"]}
    perform="profile-page:visit"
    yes={() => (

    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>

  )}
  no={() => <h2>Permissions Denied</h2>}
/>


   
  );
};

export default Profile;