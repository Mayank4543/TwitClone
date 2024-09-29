import express from "express";
import {
  bookmark,
  follow,
  getmyprofile,
  getotherprofile,
  login,
  logout,
  register,
  unfollow,
} from "../controller/userController.js";
import isAuthenticate from "../config/auth.js";
const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAuthenticate, bookmark);
router.route("/myprofile/:id").get(isAuthenticate, getmyprofile);
router.route("/otheruser/:id").get(isAuthenticate, getotherprofile);
router.route("/follow/:id").post(isAuthenticate, follow);
router.route("/unfollow/:id").post(isAuthenticate, unfollow);
export default router;
