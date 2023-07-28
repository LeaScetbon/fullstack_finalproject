import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FiLogOut } from "react-icons/fi";
function Login() {
  const [username, setUsername] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `http://localhost:3001/login?username=${username}`
      );
      console.log(111);
      console.log(response);
      let data = await response.json();
      console.log(data);
      if (data.length && data[0].userpassword === parseInt(userpassword, 10)) {
        response = await fetch(
          `http://localhost:3001/users?username=${username}`
        );
        data = await response.json();
        localStorage.setItem("username", JSON.stringify(data[0]));
        navigate("/home");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in");
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div id="div_signIn">
      {""}

      <div className="wrapper">
        <form className="form-wrapper sign-in">
          <h2>Login</h2>
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

          <br />

          <button type="submit" onClick={handleLogin} id="signInBtn">
            Login
          </button>

          <a href="/register" className="signUp-link">
            Register
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;

/*ב command אחת:
Node server.js
ב command השנייה:
npm start App.js*/
