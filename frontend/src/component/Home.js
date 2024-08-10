import React from "react";
import { Leftsidebar } from "./Leftsidebar";
import { Rightsidebar } from "./Rightsidebar";
import Feed from "./Feed";
export const Home = () => {
  return (
    <div className="flex justify-evenly   ">
      <Leftsidebar />
      <Feed />
      <Rightsidebar />
    </div>
  );
};
