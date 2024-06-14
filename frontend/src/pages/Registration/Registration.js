import React, { useState, useRef, useEffect } from "react";
import UnivercityBlock from "../../components/UnivercityBlock/UnivercityBlock";
import "./Registration.css";

const Registration = () => {
  const univercities = [
    "Yerevan State University",
    "National University of Architecture and Construction of Armenia",
    "Yerevan State Medical University",
    "Armenian State Pedagogical University",
    "AUA",
  ];
  const currentUnivercity = "Yerevan State University";
  const [isUOpen, setIsUOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (isUOpen) {
      wrapperRef.current.style.maxHeight = `${univercities.length * 100}px`;
      wrapperRef.current.style.opacity = 1;
    } else {
      wrapperRef.current.style.maxHeight = 0;
      wrapperRef.current.style.opacity = 0;
    }
  }, [isUOpen, univercities.length]);

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
        <input id="registration-password-input" placeholder="Password ..." />
        <input id="registration-repeat-password" placeholder="Repeat it ..." />
      </div>
      <div id="registration-yeargroup-wrapper">
        <input id="registration-year-input" placeholder="Year ..." />
        <input id="registration-group-input" placeholder="Group ..." />
      </div>
      <div id="registration-univercity-wrapper">
        <button
          id="registration-univercity-choose-button"
          onClick={() => {
            setIsUOpen(!isUOpen);
          }}
        >
          {currentUnivercity}
          {/* Icon can be added here to indicate dropdown state */}
        </button>
        <div id="registration-univercities-wrapper" ref={wrapperRef}>
          {univercities.map((univercity, index) => {
            return <UnivercityBlock key={index} name={univercity} />;
          })}
        </div>
      </div>
      <button id="registration-sign-in-button">Sign In</button>
    </div>
  );
};

export default Registration;
