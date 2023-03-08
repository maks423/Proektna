import React from "react";
import "./Footer.css";

const Footer = () => { 
  return (
    <footer className="footer">
      <div className="footerLeft">
        <div className="contactFooter">Contact:</div>
        <div className="phone1">+380 (97) 010 6092</div>
        <div className="phone2">+380 (97) 077 0442</div>
        <div className="email">maddog@gmail.com</div>
      </div>
 
      <img className="unicore" src="/images/Unicore white logo.png"></img>

      <div className="photoMessengers">
        <div className="cyrcle1"><img className="socialMessangerPhoto" src="/images/viber.png" alt="" /> </div>
        <div className="cyrcle2"><img className="socialMessangerPhoto" src="/images/facebook.png" alt="" /></div>
        <div className="cyrcle3"><img className="socialMessangerPhoto" src="/images/telegram-2.png" alt="" /></div>
        <div className="cyrcle4"><img className="socialMessangerPhoto" src="/images/instagram.png" alt="" /></div>
      </div>
    </footer>
  );
};

export default Footer;
