import React from 'react';
import { useContext, useState } from 'react';
import DemoContext from '../context/DemoContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let { setUser } = useContext(DemoContext);

  return (
    <div className="inputbox">
      <input
        type="text"
        className="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      &nbsp;
      <input
        type="password"
        className="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setUser({ username, password });
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
