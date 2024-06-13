import React from "react";
import "./Registration.css";

const Registration = () => {
  return (
    <div id="registration-container">
      <div id="registration-headers-wrapper">
        <h2 id="registration-app-name">ALEXANDRIA</h2>
        <h2 id="registration-header">Log In</h2>
      </div>
      <hr id="separator" />
      <div id="registration-name-surname-wrapper">
        <input id="registration-name-input" placeholder="Name ..." />
        <input id="registration-surname-input" placeholder="Surname ..." />
      </div>
      <input id="registration-email-input" placeholder="Email ..." />
      <div id="registration-password_wrapper">
        <input id="registration-password-input" placeholder="Password ..."/>
        <input id="registration-repeat-password" placeholder="Repeat it ..."/>
      </div>  
    </div>
  );
};

export default Registration;
