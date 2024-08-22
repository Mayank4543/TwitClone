import express from "express";
import {
  createTweet,
  deletetweet,
  follower,
  likeanddislike,
} from "../controller/tweetController.js";
import isAuthenticate from "../config/auth.js";
const router = express.Router();
router.route("/create").post(isAuthenticate, createTweet);
router.route("/delete/:id").delete(isAuthenticate, deletetweet);
router.route("/like/:id").put(isAuthenticate, likeanddislike);
router.route("follower/:id").put(isAuthenticate, follower);
export default router;
