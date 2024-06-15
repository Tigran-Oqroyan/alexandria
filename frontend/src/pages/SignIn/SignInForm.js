import React, { useState } from "react";
import "./SignInForm.css"; // Make sure this path is correct based on your project structure

const SignInForm = () => {

  const [currentUser , setCurrentUser] = useState({
    "username" : '',
    "email": '',
    "password": ''
   })

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e , field) => {
    const value = e.target.value;
    setCurrentUser((prevInfo) => ({...prevInfo, [field]: value}));
  }

  const validate = () => {
    const newErrors = {};

    if(!currentUser.username.trim()) newErrors.username = "Username is required";
    
    const passwordRegex = /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){2,})(?=(.*[!@#$%^&*()\-__+.]){2,}).{6,}$/;
    if (!currentUser.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(currentUser.password)) {
      newErrors.password = "Password must include at least 2 lowercase, 2 uppercase, and 2 symbols";
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!currentUser.email || !emailRegex.test(currentUser.email)) {
      newErrors.email = "Invalid email";
    }

    return newErrors;

  }

  const handleSubmit = async (e) => {
    const newErrors = validate();
    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log(errors);
    }else {
      setErrors({});
      console.log("Everything is okay");
    }
  };


  return (
    <div id="signIn-container">
      <div id="signIn-headers-wrapper">
        <h2 id="signIn-app-name">ALEXANDRIA</h2>
        <h2 id="signIn-header">Register</h2>
      </div>
      <hr id="separator" />

      <div id="signIn-username-container" className="input-container">
        <input
          id="signIn-username-input"
          placeholder="Username ..."
          type="text"
          value={currentUser.username}
          onChange={(e) => handleInputChange(e, 'username')}
        />
        <i id="signIn-user-icon" className="bx bxs-user"></i>
      </div>

      {errors.username && <span className="signIn-error">{errors.username}</span>}
      
      <div id="signIn-email-container" className="input-container">
        <input 
          id="signIn-email-input" 
          placeholder="Email ..." 
          type="text"
          value={currentUser.email} 
          onChange={(e) => handleInputChange(e, 'email')}
        />
        <i id="signIn-email-icon" className="bx bxs-envelope"></i>
      </div>

      {errors.email && <span className="signIn-error">{errors.email}</span>}

      <div id="signIn-password-container" className="input-container">
        {showPassword ? (
          <>
            <input
              id="signIn-password-input"
              placeholder="Password ..."
              type="text"
              value={currentUser.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
            <i
              id="signIn-lock-open-icon"
              className="bx bxs-lock-open-alt"
              onClick={() => setShowPassword(false)}
            ></i>
          </>
        ) : <>
        <input
              id="signIn-password-input"
              placeholder="Password ..."
              type="password"
              value={currentUser.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
            <i
              id="signIn-lock-icon"
              className="bx bxs-lock-alt"
              onClick={() => {
                setShowPassword(true)
              }}
            ></i>
        </>}
      </div>
      {errors.password && <span className="signIn-error">{errors.password}</span>}

      <button onClick={(e) => handleSubmit(e)} id="signIn-btn">Sign In</button>
    </div>
  );
};

export default SignInForm;
