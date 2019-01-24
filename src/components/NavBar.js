import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="topnav">
      <li className="topnav">
        <NavLink className="topnav" to="/about">
          About
        </NavLink>
      </li>
      <li className="topnav">
        <NavLink className="topnav" to="/contact">
          Contact
        </NavLink>
      </li>
      <li className="topnav">
        <NavLink className="topnav" to="/docs">
          Docs
        </NavLink>
      </li>
      <li className="topnav">
        <NavLink className="topnav" to="/tutorial">
          Tutorial
        </NavLink>
      </li>
      <li className="topnav">
        <NavLink className="topnav" to="/myaccount">
          My Account
        </NavLink>
      </li>
      <li className="topnav">
        <NavLink exact className="topnav" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <img className="icon" src={require("../images/soap.png")} />
      </li>
      <li>
        <Link className="home-text" to="/">
          Cussbuster
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
