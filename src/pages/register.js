import React, { useState,createContext } from 'react';
import {  useNavigate } from "react-router-dom";


function Register() {
  const [username, setUsername] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const [email, setEmail] = useState('');
 

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:300/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,email, userpassword  }),
      });
  
      if (response.ok) {
        alert('Registration successful! Please login with your new account.');
        // Clear the input fields after successful registration
        setUsername('');
        setUserPassword('');
        setEmail('');
        navigate("/login")

      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <form onSubmit={handleRegister} className='register'>
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
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}


export default Register;