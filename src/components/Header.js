import { useState, useContext } from "react";
import { LOGO_URL } from "../util/constent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlinesStatus";
import LoginPage from "./LoginPage";
import { UserContext } from "../util/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { logedInUser,locality } = useContext(UserContext);
  return (
    <div className="header flex justify-between m-1 p- bg-pink-200  shadow-xl mb-2 rounded-lg sticky top-0">
      <div className="logo w-16">
        <img src={LOGO_URL} />
      </div>
      <div className=" flex items-center">
        <ul className="flex p-2 m-2 gap-8 items-center">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link className="nav-item" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-item" to={"/contact"}>
              Contact Us
            </Link>
          </li>

          <li>
            <Link className="nav-item" to={"/grocery"}>
              Grocery
            </Link>
          </li>
          <li>Cart</li>

          <Link className="nav-item" to={"/loginpage"}>
            <button className="log-btn w-20 h-11 bg-green-300 rounded-[25px]">
              LogIn
            </button>
          </Link>
          <li>{logedInUser}</li>
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
