import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { CiBookmarkCheck } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Leftsidebar = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <>
      <div className="w-[20%]">
        <div>
          <img
            className="ml-5"
            width={"24px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLN1uOyYGBL6AIkwIyOR2KH9sMYqmn0CsOVA&s"
            alt="logo"
          />
        </div>
        <div className="my-4">
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <FaHome size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <MdOutlineExplore size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <IoIosNotificationsOutline size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Notification</h1>
          </div>

          <Link
            to={`/profile/${user?._id}`}
            className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"
          >
            <div>
              <CgProfile size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </Link>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CiBookmarkCheck size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <SlLogout size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>
        </div>
      </div>
    </>
  );
};
