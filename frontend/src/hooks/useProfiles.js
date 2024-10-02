import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userSlice";

const useProfiles = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMyprofile = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/myprofile/${id}`, {
          withCredentials: true,
        });
        dispatch(getMyProfile(res.data.user));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyprofile();
  }, [id]);
};
export default useProfiles;
