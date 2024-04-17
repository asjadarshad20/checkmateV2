import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginFormStyles.css';




const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    // Validate username and password if needed
    const isAuthenticated = true;
    navigate('/dashboard')

   
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <div className="formGroup">
        <label htmlFor="username">Username</label>
        <input
          className="input"  // Apply the 'input' class
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Password</label>
        <input
          className="input"  // Apply the 'input' class
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="button" type="submit">Login</button> {/* Apply the 'button' class */}
    </form>
  );
};



export default LoginForm;
