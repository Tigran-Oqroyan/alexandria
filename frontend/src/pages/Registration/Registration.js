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
  const [errors, setErrors] = useState({});

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

  const validate = () => {
    const newErrors = {};

    // Validate name and surname
    if(!user.name.trim()) newErrors.name = "Name is required";
    if(!user.surname.trim()) newErrors.surname = "Surname is required";
    
    // Validate username
    if(!user.username.trim()) newErrors.username = "Username is required";

    // Validate password 
    const passwordRegex = /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*[!@#$%^&*()\-__+.]){2,}).{6,}$/;
    if(!user.password.trim()) {
      newErrors.password = "Password is required";
    }else if(!passwordRegex.test(user.password)) {
      newErrors.password = "Password must include at least 2 lowercase, 2 uppercase, and 2 symbols";
    }
    if(user.password !== user.repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match";
    }
  
    // Validate year

    const year = parseInt(user.year, 10);
    const date = new Date();
    const nowYear = date.getFullYear();

    if(!user.year || isNaN(year) || year < 2000 || year > nowYear ) {
      newErrors.year = `Year must be between 2000 and ${nowYear}`;
    }

    // Validate group
    if (!user.group.trim()) newErrors.group = "Group is required";
      
    // Validate university
    if (!user.univercity.trim()) newErrors.univercity = "University is required";
    
    // Validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!user.email || !emailRegex.test(user.email)) {
      newErrors.email = "Invalid email";
    }
    
    // Validate phone
    const phoneRegex = /^0\d{8}$/;
    if (!user.phone || !phoneRegex.test(user.phone)) {
      newErrors.phone = "Phone number must be 9 digits and start with a 0 (Armenian format)";
    }

    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Thank you for joining. We have registered you");
    }
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
          onChange={(e) => handleInputChange(e, "name")}
        />
        <input
          id="registration-surname-input"
          placeholder="Surname ..."
          type="text"
          value={user.surname}
          onChange={(e) => handleInputChange(e, "surname")}
        />
      </div>
      <div id="registration-error-wrapper">
        {errors.name && <span className="registration-error">{errors.name}</span>}
        {errors.surname && <span className="registration-error">{errors.surname}</span>}
      </div>
      
      <div id="registration-username-container" className="input-container">
        <input
          id="registration-username-input"
          placeholder="Username ..."
          type="text"
          value={user.username}
          onChange={(e) => handleInputChange(e, "username")}
        />
        <i id="registration-user-icon" className='bx bxs-user'></i>
      </div>

      {errors.username && <span className="username-registration-error">{errors.username}</span>}

      <div id="registration-password_wrapper">
        <div id="registration-password-container">
          <input
            id="registration-password-input"
            placeholder="Password ..."
            type="text"
            value={user.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          <i id="registration-lock-icon" class='bx bxs-lock-alt'></i>
        </div>
        <div id="registration-repeatPassword-container">
          <input
            id="registration-repeat-password-input"
            placeholder="Repeat it ..."
            type="text"
            value={user.repeatPassword}
            onChange={(e) => handleInputChange(e, "repeatPassword")}
          />
          <i id="registration-lock-open-icon" class='bx bxs-lock-open-alt'></i>
        </div>
      </div>

      <div id="registration-error-wrapper">
        {errors.password && <span className="registration-error">{errors.password}</span>}
        {errors.repeatPassword && <span className="registration-error">{errors.repeatPassword}</span>}
      </div>
      
      <div id="registration-yeargroup-wrapper">
        <input
          id="registration-year-input"
          placeholder="Year ..."
          type="text"
          value={user.year}
          onChange={(e) => handleInputChange(e, "year")}
        />
        <input
          id="registration-group-input"
          placeholder="Group ..."
          type="text"
          value={user.group}
          onChange={(e) => handleInputChange(e, "group")}
        />
      </div>
      <div id="registration-error-wrapper">
        {errors.year && <span className="registration-error">{errors.year}</span>}
        {errors.group && <span className="registration-error">{errors.group}</span>}
      </div>
      
      <div id="registration-univercity-wrapper">
        <button
          id="registration-univercity-choose-button"
          onClick={() => {
            setIsUOpen(!isUOpen);
          }}
        >
          {currentUnivercity}
        </button>
        <div id="registration-univercities-wrapper" ref={wrapperRef}>
          {univercities.map((univercity, index) => {
            return <UnivercityBlock key={index} name={univercity} />;
          })}
        </div>
      </div>

      <div id="registration-emailphone-wrapper">
        <div id="registration-email-container">
          <input
            id="registration-email-input"
            placeholder="Email ..."
            type="text"
            value={user.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <i id="registration-email-icon" class='bx bxs-envelope' ></i>
        </div>
        <div id="registration-phone-container">
          <input
            id="registration-phone-input"
            placeholder="Phone ..."
            type="text"
            value={user.phone}
            onChange={(e) => handleInputChange(e, "phone")}
          />
          <i id="registration-phone-icon" class='bx bxs-phone' ></i>
        </div>
      </div>
      
      <div id="registration-error-wrapper">
        {errors.email && <span className="registration-error">{errors.email}</span>}
        {errors.phone && <span className="registration-error">{errors.phone}</span>}
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
