import React, { useState, useRef, useEffect } from "react";
import UnivercityBlock from "../../components/UnivercityBlock/UnivercityBlock";
import univercities from "../../utils/universities";
import axios from 'axios';
import "./Registration.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const currentSelectedUniversity = useSelector(state => state.currentSelectedUniversity);
  const [isUOpen, setIsUOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    setIsUOpen(false);
    user.univercity = currentSelectedUniversity;
  },[user ,currentSelectedUniversity])

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

    if (!user.name.trim()) newErrors.name = "Name is required";
    if (!user.surname.trim()) newErrors.surname = "Surname is required";
    
    if (!user.username.trim()) newErrors.username = "Username is required";

    const passwordRegex = /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*[!@#$%^&*()\-__+.]){2,}).{6,}$/;
    if (!user.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(user.password)) {
      newErrors.password = "Password must include at least 2 lowercase, 2 uppercase, and 2 symbols";
    }
    if (user.password !== user.repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match";
    }
  
    const year = parseInt(user.year, 10);
    const date = new Date();
    const nowYear = date.getFullYear();

    if (!user.year || isNaN(year) || year < 2000 || year > nowYear ) {
      newErrors.year = `Year must be between 2000 and ${nowYear}`;
    }

    if (!user.group.trim()) newErrors.group = "Group is required";
      
    if(!user.univercity){
      user.univercity = currentSelectedUniversity;
    }

    if (!user.univercity.trim()) newErrors.univercity = "University is required";
    
    const emailRegex = /\S+@\S+\.\S+/;
    if (!user.email || !emailRegex.test(user.email)) {
      newErrors.email = "Invalid email";
    }
    
    const phoneRegex = /^0\d{8}$/;
    if (!user.phone || !phoneRegex.test(user.phone)) {
      newErrors.phone = "Phone number must be 9 digits and start with a 0 (Armenian format)";
    }

    return newErrors;
  }

  const handleSubmit = async (e) => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/usernames/${user.username}`);
        if(response.data?.username){
          alert("Username is alerady exists");
          return;
        }else{
          await axios.post('http://localhost:5000/api/usernames', {
            _id:user.username,
            username:user.username
          })
        }
        user._id = user.username;
        await axios.post('http://localhost:5000/api/users', user);
        alert("Thank you for joining. We have registered you");
        setUser({
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
        navigate('/SignIn');
      } catch (error) {
        console.error("There was an error registering the user:", error);
        alert("There was an error registering the user. Please try again.");
        return;
      } finally {
        setIsSubmitting(false);
        return;
      }
    }
  };

  return (
    <div id="registration-container">
      <div id="registration-headers-wrapper">
        <h2 id="registration-app-name">ALEXANDRIA</h2>
        <h2 onClick={()=> navigate('/SignIn')} id="registration-header">Sign In</h2>
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
            type={showPassword ? "text" : "password"}
            value={user.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          <i
            id="registration-lock-icon"
            onClick={() => { console.log("clicked") ; setShowPassword(!showPassword)}}
            className={showPassword ? 'bx bxs-lock-open-alt' : 'bx bxs-lock-alt'}
          ></i>
        </div>
        <div id="registration-repeatPassword-container">
          <input
            id="registration-repeat-password-input"
            placeholder="Repeat it ..."
            type={showPassword ? "text" : "password"}
            value={user.repeatPassword}
            onChange={(e) => handleInputChange(e, "repeatPassword")}
          />
          <i
            id="registration-lock-icon"
            onClick={() => setShowPassword(!showPassword)}
            className={showPassword ? 'bx bxs-lock-open-alt' : 'bx bxs-lock-alt'}
          ></i>
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
          {currentSelectedUniversity}
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
          <i id="registration-email-icon" className='bx bxs-envelope' ></i>
        </div>
        <div id="registration-phone-container">
          <input
            id="registration-phone-input"
            placeholder="Phone ..."
            type="text"
            value={user.phone}
            onChange={(e) => handleInputChange(e, "phone")}
          />
          <i id="registration-phone-icon" className='bx bxs-phone' ></i>
        </div>
      </div>

      <div id="registration-error-wrapper">
        {errors.email && <span className="registration-error">{errors.email}</span>}
        {errors.phone && <span className="registration-error">{errors.phone}</span>}
      </div>
      
      <button
        id="registration-sign-in-button"
        onClick={(e) => {
          if (!isSubmitting) handleSubmit(e);
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Registration;
