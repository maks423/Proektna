import React from "react";
import "./doctor-page.css";

const DoctorPage = () => {
  return (
    <div className="backgroundHelloDoctor">
      <span className="profileText">Name</span>
      <span className="profileText">Last name</span>
      <div className="porfileSpace">
        <img className="iconProfile" src="./images/Icon_profile.png"></img>
      </div>

      <div className="sectionDoctor">
        
        <div className="startMeetingDoctor">
          <input
            className="startMeetingButtonDoctor"
            type="button"
            value="Start meeting"
          />
        </div>

        <div className="clientBase">Client Base</div>

        <div className="clientBazeArea">
          <span className="textClientBase">Name</span>
          <span className="textClientBase">Last name</span>
          <div className="textAreaClientBaze"></div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
