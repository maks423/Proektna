import React from "react";
import "./contact-page.css";

const ContactPage = () => {
  return (
    <div className="backgroundContact">
      <img className="doctorTable" src="/images/DoctorTable.png" alt="Doctor" />
      <img className="pliama1" src="/images/pliama1.jpg"></img>
      <img className="pliama2" src="/images/pliama2.jpg"></img>
      <div className="applicationForm">
        <div className="applicationFormHeader">Application form</div>
        
        <div className="applicationFormName">
          <label className="textInputContact" for="name">Name</label>
          <input type="text" id="name" className="contactPageInput" />
        </div>

        <div className="applicationFormEmail">
        <label className="textInputContact" for="email">Email</label>
          <input type="text" id="email" className="contactPageInput" />
        </div>
 
        <div className="applicationFormBirthday">
        <label className="textInputContact" for="birthday">Birthday</label>
          <input type="text" id="birthday" className="contactPageInput" />
        </div>

        <div className="applicationFormLastName">
        <label className="textInputContact" for="LastName">Last Name</label>
          <input type="text" id="LastName" className="contactPageInput" />
        </div>

        <div className="applicationFormComplains">
            <label className="textInputContactComplains" for="comlains">Comlains</label>
            <textarea className="contactPageInputComplains"  id="comlains" ></textarea>
        </div>

        <div className="applicationFormCreate">
            <input className="applicationFormCreateButton" type="button" value="Create" />
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;
