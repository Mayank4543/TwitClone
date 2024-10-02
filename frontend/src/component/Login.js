import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { USER_API_ENDPOINT } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

const Login = () => {
  const [islogin, setlogin] = useState(true);
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submithandler = async (e) => {
    e.preventDefault();
    if (islogin) {
      // login
      try {
        const response = await axios.post(
          `${USER_API_ENDPOINT}/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(getUser(response.data.user));
        if (response.data.success) {
          navigate("/");
          toast.success(response.data.message);
        }
        // console.log(response);
      } catch (error) {
        toast.error(error.response.data.message || "An error occurred");
        console.error(error);
      }
    } else {
      // register
      try {
        const response = await axios.post(
          `${USER_API_ENDPOINT}/register`,
          {
            name,
            username,
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (response.data.success) {
          toast.success(response.data.message);
        }
        // console.log(response);
      } catch (error) {
        toast.success(error.response.data.message);

        console.log(error);
      }
    }
  };
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
            <form onSubmit={submithandler} className="flex flex-col w-[55%]">
              {!islogin && (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder=" Name"
                    className="outline-blue-400 border border-gray-800  px-4 py-1 my-2 text-xl rounded-full font-semibold"
                  />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    placeholder=" UserName"
                    className="outline-blue-400 border border-gray-800  px-4 py-1 my-2 text-xl rounded-full font-semibold"
                  />
                </>
              )}
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder=" Email"
                className="outline-blue-400 border border-gray-800  px-4 py-1 my-2 text-xl rounded-full font-semibold"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
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
