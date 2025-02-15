import React from "react";

import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_ENDPOINT_TWEET } from "../utils/constant";
import { useState } from "react";
import toast from "react-hot-toast";
import { getRefresh } from "../redux/tweetSlice";
const CheckPost = () => {
  const [description, setdescription] = useState("");
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const submitHandler = async () => {
    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT_TWEET}/create`,
        {
          description,
          id: user?._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
    setdescription("");
  };
  return (
    <>
      <div className="w-[100%]">
        <div>
          <div className="flex items-center justify-between border-b border-gray-200">
            <div className=" hover:bg-gray-200 w-full px-4 py-3 text-center">
              <h1 className="font-semibold text-gray-600 cursor-pointer text-lg">
                For you
              </h1>
            </div>
            <div className=" hover:bg-gray-200 w-full px-4 py-3 text-center">
              <h1 className="font-semibold text-gray-600 cursor-pointer text-lg">
                following
              </h1>
            </div>
          </div>
          <div>
            <div className="flex items-center p-4">
              <div>
                <Avatar
                  src="https://avatars.githubusercontent.com/u/134360258?v=4&size=64"
                  size={"40"}
                  round={true}
                />
              </div>
              <input
                className="w-full outline-none border-none text-xl ml-2"
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
                type="text"
                placeholder="What your Happening ?"
              />
            </div>
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
              <div>
                <CiImageOn size={"24px"} />
              </div>
              <button
                on
                onClick={submitHandler}
                className="bg-[#1D9Bf0] px-4 py-2 border-none rounded-full  text-lg   text-white "
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckPost;
