import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useProfiles from "../hooks/useProfiles";

const Profile = () => {
  const { user, profile } = useSelector((store) => store.user);
  console.log("data", profile?.name);
  useProfiles(user?._id);
  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div className=" flex items-center py-2">
        <Link
          to="/"
          className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer"
        >
          <IoMdArrowBack size={"24px"} />
        </Link>
        <div className="ml-2">
          {" "}
          <h1 className="dont-bold text-lg ">{profile?.name}</h1>
          <p className="text-gray-500 text-sm"> 10 post</p>
        </div>
      </div>
      <img
        src="https://media.licdn.com/dms/image/D4D16AQGrnpD2edxZPA/profile-displaybackgroundimage-shrink_350_1400/0/1706947033005?e=1728518400&v=beta&t=AAHJoSm5PeKufIXLxqcqbmxhIYtZj-3_zf0vkOyyWyk"
        alt=""
      />

      <div className="absolute top-52 ml-2 rounded-full border-4 border-white">
        <Avatar
          src="https://avatars.githubusercontent.com/u/134360258?v=4"
          size={"110px"}
          round={true}
        />
      </div>
      <div className="text-right m-4">
        <button className="px-4  py-1 hover:bg-gray-200 rounded-full border-gray-400">
          Edit Profile
        </button>
      </div>
      <div className="ml-4 mt-4">
        <h1 className="font-bold text-xl mt-8 ">{profile?.name}</h1>
        <p>@{profile?.username}</p>
      </div>
      <div className="ml-4">
        <p>
          BCA 3rd year student, working on strengthening the roots and
          developing real-life projects. - Join me on this journey and progress
          ahead together.
        </p>
      </div>
    </div>
  );
};

export default Profile;
