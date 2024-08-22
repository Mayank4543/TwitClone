import { Tweet } from "../Models/tweetSchema.js";
export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      return res.status(401).json({
        message: "Please fill in all fields",
        success: false,
      });
    }
    await Tweet.create({
      description,
      userId: id,
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
    const { id } = req.params;
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
  }
};
