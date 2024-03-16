import { useState } from "react";
import { LOGO_URL } from "../util/constent";
import { Link } from "react-router-dom";

const Header = () => {
  const [logBtn, stateLogBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="list-item">
        <ul>
          <li>
            <Link className="nav-item"  to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="nav-item" to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link className="nav-item" to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="log-btn"
            onClick={() => {
              logBtn === "Login" ? stateLogBtn("Logout") : stateLogBtn("Login");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
