import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/otheruser/${id}`, {
          withCredentials: true,
        });

        dispatch(getOtherUsers(res.data.otheruserid));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers();
  }, [id]);
};
export default useGetOtherUsers;
