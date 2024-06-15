import React, { useState, useRef, useEffect } from "react";
import UnivercityBlock from "../../components/UnivercityBlock/UnivercityBlock";
import univercities from "../../utils/universities";
import "./Registration.css";

const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    repeatPassword: "",
    year: "",
    group: "",
    univercity: "",
    email: "",
    phone: "",
  });

  const currentUnivercity = "Yerevan State University"; // Esi pti poxvi Redux
  const [isUOpen, setIsUOpen] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (isUOpen) {
      wrapperRef.current.style.maxHeight = `${univercities.length * 100}px`;
      wrapperRef.current.style.opacity = 1;
    } else {
      wrapperRef.current.style.maxHeight = 0;
      wrapperRef.current.style.opacity = 0;
    }
  }, [isUOpen]);

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setUser((prevInfo) => ({ ...prevInfo, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for joinign we have registered you")
  };
  return (
    <div id="registration-container">
      <div id="registration-headers-wrapper">
        <h2 id="registration-app-name">ALEXANDRIA</h2>
        <h2 id="registration-header">Log In</h2>
      </div>
      <hr id="separator" />

      <div id="registration-name-surname-wrapper">
        <input
          id="registration-name-input"
          placeholder="Name ..."
          type="text"
          value={user.name}
          required
          onChange={(e) => handleInputChange(e, "name")}
        />
        <input
          id="registration-surname-input"
          placeholder="Surname ..."
          type="text"
          value={user.surname}
          required
          onChange={(e) => handleInputChange(e, "surname")}
        />
      </div>

      <input
        id="registration-username-input"
        placeholder="Username ..."
        type="text"
        value={user.username}
        required
        onChange={(e) => handleInputChange(e, "username")}
      />

      <div id="registration-password_wrapper">
        <input
          id="registration-password-input"
          placeholder="Password ..."
          type="text"
          value={user.password}
          required
          onChange={(e) => handleInputChange(e, "password")}
        />
        <input
          id="registration-repeat-password"
          placeholder="Repeat it ..."
          type="text"
          value={user.repeatPassword}
          required
          onChange={(e) => handleInputChange(e, "repeatPassword")}
        />
      </div>

      <div id="registration-yeargroup-wrapper">
        <input
          id="registration-year-input"
          placeholder="Year ..."
          type="text"
          value={user.year}
          required
          onChange={(e) => handleInputChange(e, "year")}
        />
        <input
          id="registration-group-input"
          placeholder="Group ..."
          type="text"
          value={user.group}
          required
          onChange={(e) => handleInputChange(e, "group")}
        />
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

      <div id="registration-emailphone-wrapper">
        <input
          id="registration-email-input"
          placeholder="Email ..."
          type="text"
          value={user.email}
          required
          onChange={(e) => handleInputChange(e, "email")}
        />
        <input
          id="registration-phone-input"
          placeholder="Phone ..."
          type="text"
          value={user.phone}
          required
          onChange={(e) => handleInputChange(e, "phone")}
        />
      </div>

      <button
        id="registration-sign-in-button"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default Registration;
