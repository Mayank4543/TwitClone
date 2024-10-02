import express from "express";
import {
  createTweet,
  deletetweet,
  follower,
  getAlltweets,
  likeanddislike,
  getfollowingTweets,
} from "../controller/tweetController.js";
import isAuthenticate from "../config/auth.js";
const router = express.Router();
router.route("/create").post(isAuthenticate, createTweet);
router.route("/delete/:id").delete(isAuthenticate, deletetweet);
router.route("/like/:id").put(isAuthenticate, likeanddislike);
router.route("/follower/:id").put(isAuthenticate, follower);
router.route("/alltweets/:id").get(isAuthenticate, getAlltweets);
router.route("/followingtweets/:id").get(isAuthenticate, getfollowingTweets);

export default router;
