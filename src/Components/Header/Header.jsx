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
      <a src="#" className="headerTextTwoo"> About us</a>
      <a src="#" className="headerTextThirt">English</a>
      <div className="singIn"><a src="#" className="headerTextFour">Sign in</a></div>
    </header>
    
  );
};

export default Header;
