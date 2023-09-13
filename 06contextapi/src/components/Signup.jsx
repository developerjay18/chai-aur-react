import React from 'react';
import { useContext } from 'react';
import DemoContext from '../context/DemoContext';

function Signup() {
  const { user } = useContext(DemoContext);

  if (!user) {
    return (
      <div>
        <h2>Welcome empty</h2>
        <h3>Your password is empty</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Welcome {user.username}</h2>
        <h3>Your password is {user.password}</h3>
      </div>
    );
  }
}

export default Signup;
