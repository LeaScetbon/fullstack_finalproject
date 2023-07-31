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
  faBagShopping,
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
          <CustomLink to="/Recipies">
            Recipies
            <FontAwesomeIcon icon={faUtensils} />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/products">
            <span>Products</span> <FontAwesomeIcon icon={faBagShopping} />
          </CustomLink>
        </li>
        <li>
          <CustomLink to={`/users/${user.id}/MyCart`}>
            My Cart <FontAwesomeIcon icon={faShoppingCart} />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/About">
            About <FontAwesomeIcon icon={faInfoCircle} />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/Home">
            Home <FontAwesomeIcon icon={faHome} />
          </CustomLink>
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
