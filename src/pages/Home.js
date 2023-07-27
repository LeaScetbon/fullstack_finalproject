import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("username"))
  );
  let navigate = useNavigate();

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
    </div>
  );
}

export default Home;
