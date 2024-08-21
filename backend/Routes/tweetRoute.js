import express from "express";
import {
  createTweet,
  deletetweet,
  likeanddislike,
} from "../controller/tweetController.js";
import isAuthenticate from "../config/auth.js";
const router = express.Router();
router.route("/create").post(isAuthenticate, createTweet);
router.route("/delete/:id").delete(isAuthenticate, deletetweet);
router.route("/like/:id").put(isAuthenticate, likeanddislike);
export default router;
