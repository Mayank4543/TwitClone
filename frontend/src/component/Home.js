import React from "react";
import { Leftsidebar } from "./Leftsidebar";
import { Rightsidebar } from "./Rightsidebar";

import { Outlet } from "react-router-dom";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";
import useGetMyTweet from "../hooks/useGetMyTweet";

export const Home = () => {
  const { user, otheruserid } = useSelector((store) => store.user);
  useGetOtherUsers(user?._id);
  useGetMyTweet(user?._id);
  return (
    <div className="flex justify-evenly   ">
      <Leftsidebar />
      <Outlet />
      <Rightsidebar otheruserid={otheruserid} />
    </div>
  );
};
