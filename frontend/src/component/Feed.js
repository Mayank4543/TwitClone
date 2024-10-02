import React from "react";
import CheckPost from "./CheckPost";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

const Feed = () => {
  const { tweets } = useSelector((store) => store.tweet);
  return (
    <div className="w-[50%] border border-gray-200">
      <CheckPost />
      {tweets?.map((tweet) => (
        <Tweet key={tweet?._id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Feed;
