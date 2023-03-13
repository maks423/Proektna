import React from "react";
import "./about-page.css";

const AboutUs = () => {
  return (
    <div className="backgroundAbout">
      <div className="headAbout">
        <div className="CONSULTATION">CONSULTATION OF THE PATIENT</div>
        <div className="interpretation">
          DOCTORS, MEDICINES, TESTS - ALL IN ONE SERVICE
        </div>
        <div className="inputAboutUs">
          <input type="text" className="inputAbout" />
        </div>

        <input type="button" value="Join meeting" className="buttonAboutUs" />

        <div className="imageDoctorsAboutUs">
          <img src="/images/people_phone.png" alt="" className="peoplePhone" />
        </div>
        <div className="phoneCall">
          <img src="/images/call.png" alt="" className="call" />
          <div className="cyrcleAboutUs1"></div>
          <div className="cyrcleAboutUs2"></div>
        </div>
      </div>
      <div className="headUpAbout">
            <div className="square1">
                <p className="SquareAbout">Consulation of a famile doctor</p>
                <p className="SquareAbout">Get medical help online</p>
               <div> <span className="SquareAbout">Doctor`s consulation in one click(video/audio/chat)</span></div>
                <img src="/images/vuyko_left.png" alt="" className="vuykoLeftAbout"/>
            </div>
            <div className="square2">
                <p className="SquareAbout">Ordering medicines online</p>
                <p className="SquareAbout">Search and reservation of drugs with a discount</p>
                <img src="/images/vuyko_centr.png" alt="" className="vuykoCentrAbout"/>
            </div>
            <div className="square3">
                <p className="SquareAbout">Consulation of a pediatrician online</p>
                <p className="SquareAbout">Get medical help online.Doctor`s consulation in one click(video/audio/chat)</p>
                <img src="/images/vuyko_right.png" alt="" className="vuykoRightAbout"/>
            </div>
      </div>
      <div className="centrAbout">
        <div className="largeLine"></div>
        <div className="tallLine"></div>
        <div className="squareInfoFirst">
            <div className="numbersAbout">+1.5M</div>
            <div className="downNumberAbout">USERS</div>
        </div>
        <div className="squareInfoSecond">
        <div className="numbersAboutSecond">+600</div>
            <div className="downNumberAboutSecond">DOCTORS</div>
        </div>
        <div className="squareInfoThirst">
        <div className="numbersAboutThirst">+5000</div>
            <div className="downNumberAboutThirst">POSITIVE REVIEWS</div>
        </div>
      </div>
      <div className="downAbout">
        <div className="div1"><span className="textHeadDownAbout">About us</span></div>
        <div className="div2">
            <li className="textDownAboutSite">One of the largest telemedicine systems in Ukraine;</li>
            <li className="textDownAboutSite">Your services will become avaible to 1 million users;</li>
            <li className="textDownAboutSite">More than 10,000 patients are served every month;</li>
            <li className="textDownAboutSite">A unique online system with a neural connection that helps in maintenance;</li>
        </div>
        <div className="div3">
            <img src="/images/vuyko_at_the_end.png" alt="" className="vuykoEnd"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
