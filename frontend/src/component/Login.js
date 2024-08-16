import React, { useState } from "react";

const Login = () => {
  const [islogin, setlogin] = useState(true);
  const loginsignuphandler = () => {
    setlogin(!islogin);
  };
  return (
    <>
      <div className=" w-screen h-screen flex items-center justify-center">
        <div className=" flex items-center justify-evenly w-[80%]">
          <div>
            <img
              className="ml-5"
              width={"360px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLN1uOyYGBL6AIkwIyOR2KH9sMYqmn0CsOVA&s"
              alt="logo"
            />
          </div>
          <div>
            <div className="my-5">
              <h1 className="text-6xl font-bold ">Happening Now</h1>
            </div>

            <h1 className="text-2xl font-bold mt-4 mb-2">
              {islogin ? "Login" : "Signup"}
            </h1>
            <form className="flex flex-col w-[55%]">
              {!islogin && (
                <>
                  <input
                    type="text"
                    placeholder=" Name"
                    className="outline-blue-400 border border-gray-800  px-4 py-1 my-2 text-xl rounded-full font-semibold"
                  />
                </>
              )}
              <input
                type="text"
                placeholder=" Email"
                className="outline-blue-400 border border-gray-800  px-4 py-1 my-2 text-xl rounded-full font-semibold"
              />
              <input
                type="text"
                placeholder=" Password"
                className="outline-blue-400 border border-gray-800   px-4 py-1 my-2  text-xl rounded-full font-semibold"
              />

              <button className="bg-[#1D9Bf0] my-4  py-2 border-none rounded-full text-lg text-white font-bold  cursor-pointer ">
                {islogin ? "Login" : "Create Account"}
              </button>
              <h1>
                {islogin ? "Do not have account?" : "Already have an account ?"}
                <span
                  onClick={loginsignuphandler}
                  className="font-bold text-blue-600 cursor-pointer"
                >
                  {islogin ? "Signup" : "login"}
                </span>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
