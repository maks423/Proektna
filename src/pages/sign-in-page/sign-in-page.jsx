import React from "react";
import "./sign-in-page.css";

const SignIn = () => {
  return( 
  <div className="backgroundSignIn">
    <div className="backgroundSignInForm">
        <img className="signInPhoto" src="/images/signPhoto.png" alt="" />
        <img className="pliamaSign1"  src="/images/PliamaSign1.png" alt="" />
        <img className="pliamaSign2"  src="/images/PliamaSign2.png" alt="" />
        <img className="pliamaSign3"  src="/images/PliamaSign3.png" alt="" />
        <div className="SignInForm">
            <label className="labelLoginSignIn" for="loginSign" >Login</label>
            <input className="loginSignIn" id="loginSign" type="text" />

            <label className="labelLoginSignIn" for="passwordSign">Password</label>
            <input className="passwordSignIn" id="passwordSign" type="text" />
            <div className="but">
            <input className="buttonSignIn" type="button" value="Sign in" />
            </div>
           
        </div>
    </div>
  </div>
  );
};

export default SignIn;
