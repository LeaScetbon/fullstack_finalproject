import React, { useState,createContext } from 'react';
import {  useNavigate } from "react-router-dom";
import './Login.css'


function Login() {
  const [username, setUsername] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`http://localhost:3001/login?username=${username}`);
      console.log(response);
      let data = await response.json();
      console.log(data);
      if (data.length && data[0].userpassword === parseInt(userpassword, 10)) {
        response = await fetch(`http://localhost:3001/users?username=${username}`);
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
        <input type="password" value={userpassword} onChange={(e) => setUserPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit" onClick={handleLogin}>Login</button>
    <button type="button" onClick={handleRegister}>Register</button>

    </form>
  );
}


export default Login;