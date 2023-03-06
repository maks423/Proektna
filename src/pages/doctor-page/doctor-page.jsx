import React from "react";
import "./doctor-page.css";

const DoctorPage = () => {
  return (
    <div className="sectionDoctor">
      <div className="headerTextDoctor">Hello,doctor</div>

      <div className="avatarDoctor">
        <div className="squareDoctor">
          <img className="cyrcleDoctor"></img>
        </div>
      </div>
 
      <div className="contactInformation">
        <label className="textInputDoctor" for="fname">
          {" "}
          Name
        </label>
        <input
          className="doctorPageInput"
          type="text"
          id="fname"
          name="firstname"
        />
        <label className="textInputDoctor" for="lname">
          Last Name
        </label>
        <input
          className="doctorPageInput"
          type="text"
          id="lname"
          name="lastname"
        />
      </div>

      <div className="startMeetingDoctor">
        <input
          className="startMeetingButtonDoctor"
          type="button"
          value="Start meeting"
        />
      </div>

      <div className="clientBase">Client Base</div>

      <div className="clientBazeArea">
        <div className="textAreaClientBaze">
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
          <input className="client" type="text" />
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
