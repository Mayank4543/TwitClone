import React from "react";
import { IoMdArrowBack } from "react-icons/io";
const Profile = () => {
  return (
    <div className="w-[50%]">
      <div>
        <div className=" flex items-center py-2">
          <div className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer">
            <IoMdArrowBack size={"24px"} />
          </div>
          <div className="ml-2">
            {" "}
            <h1 className="dont-bold text-lg ">Mayank</h1>
            <p className="text-gray-500 text-sm"> 10 psot</p>
          </div>
        </div>
        <img
          src="https://media.licdn.com/dms/image/D4D16AQGrnpD2edxZPA/profile-displaybackgroundimage-shrink_350_1400/0/1706947033005?e=1728518400&v=beta&t=AAHJoSm5PeKufIXLxqcqbmxhIYtZj-3_zf0vkOyyWyk"
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
