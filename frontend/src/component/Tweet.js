import React from "react";
import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";
import { USER_API_ENDPOINT_TWEET } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { getRefresh } from "../redux/tweetSlice";
import toast from "react-hot-toast";
const Tweet = ({ tweet }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const likeOrDislikeHandler = async (id) => {
    try {
      const res = await axios.put(
        `${USER_API_ENDPOINT_TWEET}/like/${id}`,
        {
          id: user?._id,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.success(error.res.data.message);
      console.log(error);
    }
  };
  const deletehandler = async (id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.delete(`${USER_API_ENDPOINT_TWEET}/delete/${id}`);
      console.log(res);
      dispatch(getRefresh());
      if (res.data.message) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.success(error.res.data.message);
      console.log(error);
    }
  };
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
                <div
                  onClick={() => likeOrDislikeHandler(tweet?._id)}
                  className="p-2 hover:bg-pink-200 rounded-full cursor-pointer"
                >
                  <CiHeart size={"24px"} />
                </div>
                <p className="ml-1">{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                  {" "}
                  <CiBookmark size={"24px"} />
                </div>

                <p className="ml-1">0</p>
              </div>
              {user?._id === tweet?.userId && (
                <div className="flex items-center">
                  <div
                    onClick={() => deletehandler(tweet?._id)}
                    className="p-2 hover:bg-red-300 rounded-full cursor-pointer"
                  >
                    {" "}
                    <MdDeleteOutline size={"24px"} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
