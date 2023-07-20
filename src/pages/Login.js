import React, { useState,createContext } from 'react';
import {  useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`http://localhost:3000/login?username=${username}`);
      let data = await response.json();
      if (data.length && data[0].password === password)  {
        response = await fetch(`http://localhost:3000/users?username=${username}`);
        data = await response.json();
        localStorage.setItem('username', JSON.stringify(data[0]));
        navigate("/application")
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while logging in');
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    navigate("/register")
  }

  return (
    <form className='login'>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit" onClick={handleLogin}>Login</button>
    <button type="button" onClick={handleRegister}>Register</button>

    </form>
  );
}


export default LoginPage;