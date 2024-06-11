import React from 'react';
import './SignInForm.css'; // Make sure this path is correct based on your project structure

const SignInForm = () => {
  return (
    <div id="container">
      <div id="form-container">
        <div id="header">
          <h1 id="header-title">ALEXANDRIA</h1>
        </div>
        <h2 id="form-title">Sign in to your account</h2>
        <p id="signup-link">Don't have an account? <a href="/hebdh">Sign up</a></p>{/*************Link must be changed********************/}
        <form id="signin-form">
          <div id="username-group" className="input-group">
            <i className="fas fa-user"></i>
            <input id="username-input" className="form-input input2" type="text" name="username" placeholder="Username" />
          </div>
          <div id="email-group" className="input-group">
            <i className="fas fa-envelope"></i>
            <input id="email-input" className="form-input input2" type="email" name="email" placeholder="Email" />
          </div>
          <div id="password-group" className="input-group">
            <i className="fas fa-lock"></i>
            <input id="password-input" className="form-input" type="password" name="password" placeholder="••••••••" />
          </div>
          <div id="form-btn-cont" className="form-btn-cont">
            <button id="signin-btn" className="form-btn">Sign in</button>
          </div>
        </form>
      </div>
      <div id="image-container" className="image-container"></div>
    </div>
  );
};

export default SignInForm;
