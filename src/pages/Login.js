import React from "react";
import "./Login.css";
import illustration from "../assets/illustration.png"; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src={illustration} alt="illustration" className="illustration" />
      </div>

      <div className="login-right">
        <h2>Log in</h2>
        <form className="login-form">
          <label>Email address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <div className="password-field">
            <input type="password" placeholder="Enter your password" />
            <button type="button" className="toggle-password">👁️‍🗨️</button>
          </div>

          <a href="/" className="forgot-password">Forgot your password?</a>

          <button type="submit" className="login-button">Log in</button>
        </form>

        <p className="register-link">
          Not got a digital account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
