import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <header className="header" >
        <img src="/images/logo_white.png"/>
        <NavLink to="/doctor">
          <a src="#" className="headerTextOne">MedDoc</a>
        </NavLink>
        <NavLink to="/contact">
        <a src="#" className="headerTextTwo">Contact </a>
        </NavLink>
      <a src="#" className="headerTextTwo">Sign in </a>
      <a src="#" className="headerTextTwo"> About us</a>
      <a src="#" className="headerTextThirt">English</a>
    </header>
  );
};

export default Header;
