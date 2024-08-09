import React from "react";
import CheckPost from "./CheckPost";
import Tweet from "./Tweet";

const Feed = () => {
  return (
    <div className="w-[50%] border border-gray-200">
      <div>
        <CheckPost />
        <Tweet />
      </div>
    </div>
  );
};

export default Feed;
