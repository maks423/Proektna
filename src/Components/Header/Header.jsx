import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (

    <header className="header" >
        
        <NavLink to="/doctor" className="headerTextOne">
        <img className="imgLogoHeader" src="/images/logo_white.png"/>MedDoc
        </NavLink>
        <NavLink to="/contact" className="headerTextTwo">
         Contact 
        </NavLink>
        <NavLink to="/about" className="headerTextTwoo">
         About us
        </NavLink>
     
      <a src="#" className="headerTextThirt">English</a>
      <NavLink className="singIn" to="/signin">
          Sign in
      </NavLink>
    </header>
    
  );
};

export default Header;
