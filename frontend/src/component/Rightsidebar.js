import React from "react";
import { IoMdSearch } from "react-icons/io";

export const Rightsidebar = () => {
  return (
    <div className="w-[20%]">
      <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none ">
        <IoMdSearch />

        <input
          type="text"
          className="outline-none px-2 bg-transparent"
          placeholder="search"
        />
      </div>
      <div className="p-4">
        <h1></h1>
        <div></div>
      </div>
    </div>
  );
};
