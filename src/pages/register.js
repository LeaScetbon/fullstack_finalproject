import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css"; // Assuming the CSS file is named Register.css and placed in the same folder as this component

function Register() {
  const [username, setUsername] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, userpassword }),
      });

      if (response.ok) {
        alert("Registration successful! Please login with your new account.");
        // Clear the input fields after successful registration
        setUsername("");
        setUserPassword("");
        setEmail("");
        navigate("/login");
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration");
    }
  };

  return (
    <div id="div_signIn">
      <div className="wrapper">
        <h2>Register</h2>
        <form onSubmit={handleRegister} className="register">
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username:</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={userpassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <label>Password:</label>
          </div>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email:</label>
          </div>
          <button id="signInBtn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
