import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router";

const Header = () => {
  const [loginToggle, setLoggingToggle] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
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
