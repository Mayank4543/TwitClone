import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
export const Rightsidebar = ({ otheruserid }) => {
  console.log("data", otheruserid);
  return (
    <div className="w-[25%]">
      <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none ">
        <IoMdSearch />

        <input
          type="text"
          className="outline-none px-2 bg-transparent"
          placeholder="search"
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg my-3">Who to follow</h1>
        {otheruserid?.map((user) => {
          return (
            <div key={user?._id} className="flex items-center justify-between">
              <div className="flex">
                <div>
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/134360258?v=4&size=64"
                    size={"40"}
                    round={true}
                  />
                </div>
                <div className="ml-2">
                  <h1 className="font-bold">{user?.name}</h1>
                  <p className="text-sm">{user?.username}</p>
                </div>
                <div>
                  {" "}
                  <Link to={`/profile/${user?._id}`}>
                    <button className="px-4 py-2 bg-black text-white rounded-full">
                      Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
