import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [login, setLogin] = useState("Login");
  
  return (
    <div class="login-page">
      <div className="heading-component p-4 flex flex-col items-center justify-center text-4xl font-bold text-purple-600 underline underline-offset-[12px] decoration-8 ">
        <div className="text flex flex-row">
          {login}
          <div className=""></div>
        </div>
      </div>

      <div className="page-content mt-50px flex flex-col items-center gap-3 p-5 ">
        {login === "Login" ? (
          <div></div>
        ) : (
          <div className="input-text flex items-center m-auto w-[480px] h-20 bg-slate-300 rounded-2xl">
            <img className="w-6 h-8 m-5"
              src="https://cdn.iconscout.com/icon/free/png-512/free-user-1482-457815.png?f=webp&w=256"
              alt=""
            />
            <input className="w-80 h-10 border-none rounded-xl p-2" type="text" placeholder=" User Name" />
          </div>
        )}

        <div className="input-text flex items-center m-auto w-[480px] h-20 bg-slate-300 rounded-2xl">
          <img
          className="w-6 h-8 m-5"
            src="https://cdn.iconscout.com/icon/free/png-512/free-email-3307467-2779835.png?f=webp&w=256"
            alt=""
          />
          <input className="w-80 h-10 border-none rounded-xl p-2" type="text" placeholder=" Email Id" />
        </div>
        <div className="input-text flex items-center m-auto w-[480px] h-20 bg-slate-300 rounded-2xl">
          <img
          className="w-6 h-8 m-5"
            src="https://cdn.iconscout.com/icon/free/png-512/free-password-5129088-4270849.png?f=webp&w=256"
            alt=""
          />
          <input className="w-80 h-10 border-none rounded-xl p-2" type="text" placeholder=" Password" />
        </div>
      </div>

      <div className="forgot-password ">
        {login === "Login" ? (
          <div></div>
        ) : (
          <p className="flex justify-center gap-4">
            lost password ? <span><Link className="nav-item " to={"/forgotpass"}> Click Here!</Link></span>
          </p>
        )}
      </div>

      <div className="submit-container flex justify-center m-4 gap-5">
        <button
          className={login === "Login"?"submit gray":"submit"}
          onClick={() => {
            setLogin("Sign Up");
          }}
        >
          Sign Up
        </button>
        <button
          className={login === "Sign Up"?"submit gray" : "submit"}
          onClick={() => {
            setLogin("Login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
