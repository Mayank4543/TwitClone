import express from "express";
import {
  bookmark,
  getmyprofile,
  getotherprofile,
  login,
  logout,
  register,
} from "../controller/userController.js";
import isAuthenticate from "../config/auth.js";
const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAuthenticate, bookmark);
router.route("/myprofile/:id").get(isAuthenticate, getmyprofile);
router.route("/otheruser/:id").get(isAuthenticate, getotherprofile);
export default router;
