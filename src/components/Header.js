import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";

const Header = () => {
  const [loginToggle, setLoggingToggle] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              loginToggle === "Login"
                ? setLoggingToggle("Logout")
                : setLoggingToggle("Login");
            }}
          >
            {loginToggle}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
