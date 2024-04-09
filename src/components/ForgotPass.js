const ForgotPass = () => {
  return (
    <div className="forgot-container m-100px flex flex-col items-center">
          <div className="heading-component">
        <div className="text text-4xl p-4 text-violet-700 font-bold mb-20">
          Forget password
          
        </div>
      </div>
      <div className="input-text flex flex-row items-center m-auto w-[480px] h-20 bg-slate-300 rounded-2xl  ">
        <img
        className="w-6 h-8 m-5"
          src="https://cdn.iconscout.com/icon/free/png-512/free-email-3307467-2779835.png?f=webp&w=256"
          alt=""
        />
        <input className="h-10 w-80 rounded-xl p-2"  type="text" placeholder=" Email Id" />
      </div>
      <div className="forget-btn mt-10">
          <button className="bg-blue-600 h-10 text-white w-40 rounded-3xl">Forgot Password</button> 
      </div>
    </div>
  );
};
export default ForgotPass;
