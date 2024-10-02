import { Tweet } from "../Models/tweetSchema.js";
import { User } from "../Models/UserSchema.js";
export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      return res.status(401).json({
        message: "Please fill in all fields",
        success: false,
      });
    }
    const user = await User.findById(id).select("-password");
    await Tweet.create({
      description,
      userId: id,
      userDetails: user,
    });
    return res.status(200).json({
      message: "Tweet created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletetweet = async (req, res) => {
  try {
    const { id } = req.params.id;
    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Tweet delete successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error ",
      success: false,
    });
  }
};
export const likeanddislike = async (req, res) => {
  const isloginUserId = req.body.id;
  const tweetId = req.params.id;
  const tweet = await Tweet.findById(tweetId);
  if (tweet.like.includes(isloginUserId)) {
    await Tweet.findByIdAndUpdate(tweet, { $pull: { like: isloginUserId } });
    return res.status(200).json({
      message: "Tweet dislike successfully",
      success: true,
    });
  } else {
    await Tweet.findByIdAndUpdate(tweet, { $push: { like: isloginUserId } });
    return res.status(200).json({
      message: "Tweet like successfully",
    });
  }
};
export const follower = async (req, res) => {
  try {
    const user = req.body.id;

    const followerid = req.params;
    const tweet = await Tweet.findById(followerid);
    if (!tweet.follower.includes(user)) {
      await Tweet.findByIdAndUpdate(tweet, { $push: { follower: user } });
      return res.status(200).json({
        message: "Following successfully",
        success: true,
      });
    } else {
      await Tweet.findByIdAndUpdate(tweet, { $pull: { follower: user } });
      return res.status(200).json({
        message: ` ${user.name}already  follow  ${followerid.name}`,
        success: true,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};
export const getAlltweets = async (req, res) => {
  // logging user ka tweet +following ka tweet
  try {
    const id = req.params.id;
    const loggedinuser = await User.findById(id);
    const loggedInUsertweets = await Tweet.find({ userId: id }); //single user
    const followingUserTweet = await Promise.all(
      loggedinuser.following.map((otherUserId) => {
        // multiple user
        return Tweet.find({ userId: otherUserId });
      })
    );
    return res.status(200).json({
      tweets: loggedInUsertweets.concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
  }
};
export const getfollowingTweets = async (req, res) => {
  try {
    const id = req.params.id;
    const loggedinuser = await User.findById(id);
    const loggedInUsertweets = await Tweet.find({ userId: id }); //single user
    const followingUserTweet = await Promise.all(
      loggedinuser.following.map((otherUserId) => {
        // multiple user
        return Tweet.find({ userId: otherUserId });
      })
    );
    return res.status(200).json({
      tweets: loggedInUsertweets.concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
  }
};
