import React from "react";
import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Tweet = ({ tweet }) => {
  return (
    <div>
      <div className="mt-2 ml-1 border-b border-gray-200">
        <div className="flex p-4 ">
          <Avatar
            src="https://avatars.githubusercontent.com/u/134360258?v=4&size=64"
            size={"40"}
            round={true}
          />
          <div className="ml-2 w-full ">
            <div className=" flex items-center ">
              <h1 className="font-bold">{tweet?.userDetails[0]?.name}</h1>
              <p className="text-gray-500 text-sm ml-1">{`@${tweet?.userDetails[0]?.username} `}</p>
            </div>
            <div>
              <p>{tweet?.description}</p>
            </div>
            <div className="flex  justify-between">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <FaRegComment size={"20px"} />
                </div>
                <p className="ml-1">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <CiHeart size={"24px"} />
                </div>
                <p className="ml-1">{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  {" "}
                  <CiBookmark size={"24px"} />
                </div>

                <p className="ml-1">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
