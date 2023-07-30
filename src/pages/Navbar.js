import React, { useState } from "react";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FiLogOut } from "react-icons/fi";
import thePinkBImage from "../assets/the_pink_b.png";
export default function Navbar() {
  const [user, setUser] = useState(
    // JSON.parse(localStorage.getItem("username"))
    JSON.parse(localStorage.getItem("username")) || { id: null }
  );
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  let navigate = useNavigate();
  return (
    <nav className="nav">
      {
        // <div className="logo">
        //   <img
        //     src={thePinkBImage}
        //     alt="The Pink B"
        //     style={{ width: "30%", height: "flex" }}
        //   />{" "}
        // </div>
      }
      <Link to="/" className="site-title">
        The Pink Bakery<span>.</span>
      </Link>

      {/* <label htmlFor="toggler" className="fas-fa-shopping-cart"></label> */}

      <ul>
        <li>
          <CustomLink to="/Recipies">Recipies</CustomLink>
        </li>
        <li>
          <CustomLink to="/products">Products</CustomLink>
        </li>
        <li>
          <CustomLink to={`/users/${user.id}/MyCart`}>My Cart</CustomLink>
        </li>
        <li>
          <CustomLink to="/About">About</CustomLink>
        </li>
        <li>
          <CustomLink to="/Home">Home</CustomLink>
        </li>
        <li isActive="false">
          <button className="logout" onClick={handleLogout}>
            <FiLogOut className="logout-icon" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  // <--- Add 'to' here
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {" "}
        {children}
      </Link>
    </li>
  );
}
