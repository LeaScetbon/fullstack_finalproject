import React, { useState } from "react";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import "./Navbar.css";
import thePinkBImage from "../assets/the_pink_b.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faShoppingCart,
  faInfoCircle,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FiLogOut } from "react-icons/fi"; // Add this import

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
      {/* ... */}
      <ul>
        <li>
          <CustomLink to="/Recipies">
            <FontAwesomeIcon icon={faUtensils} /> Recipies
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/products">
            <FontAwesomeIcon icon={faShoppingCart} /> Products
          </CustomLink>
        </li>
        <li>
          <CustomLink to={`/users/${user.id}/MyCart`}>
            <FontAwesomeIcon icon={faShoppingCart} /> My Cart
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/About">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/Home">
            <FontAwesomeIcon icon={faHome} /> Home
          </CustomLink>
        </li>
        <li>
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
