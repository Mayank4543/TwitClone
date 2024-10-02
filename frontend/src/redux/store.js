import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const store = configureStore({
  reducer: {
    // action
    user: userSlice,
  },
});
export default store;
