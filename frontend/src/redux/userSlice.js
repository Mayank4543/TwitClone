import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otheruserid: null,
    profile: null,
  },
  reducers: {
    // multiple actions
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getOtherUsers: (state, action) => {
      state.otheruserid = action.payload;
    },
    getMyProfile: (state, action) => {
      state.profile = action.payload;
    },
    followingUpdate: (state, action) => {
      // unfollow
      if (state.user.following.includes(action.payload)) {
        state.user.following = state.user.following.filter((itemId) => {
          return itemId !== action.payload;
        });
      } else {
        // follow
        state.user.following.push(action.payload);
      }
    },
  },
});
export const { getUser, getOtherUsers, getMyProfile, followingUpdate } =
  userSlice.actions;
export default userSlice.reducer;
