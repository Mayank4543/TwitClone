import React from "react";
import { Leftsidebar } from "./Leftsidebar";
import { Rightsidebar } from "./Rightsidebar";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";
export const Home = () => {
  return (
    <div className="flex justify-evenly   ">
      <Leftsidebar />
      <Outlet />
      <Rightsidebar />
    </div>
  );
};
