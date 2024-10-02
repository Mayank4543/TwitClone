import bcryptjs from "bcryptjs";
import { User } from "../Models/UserSchema.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(401).json({
        message: "All field are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User  already exist",
        success: false,
      });
    }
    const hashpass = await bcryptjs.hash(password, 16);
    await User.create({
      name,
      email,
      password: hashpass,
    });
    return res.status(201).json({
      message: "User Created successfully!",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "All field are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(401).json({
        message: "Incorrect email and password",
        success: false,
      });
    }
    const ismatch = await bcryptjs.compare(password, user.password);
    if (!ismatch) {
      return res.status(401).json({
        message: "Invalid password",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d", // Fixed typo
    });
    return res
      .status(201)
      .cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true }) // Updated `expireIn` to `maxAge`
      .json({
        message: "Login successfully!",
        user,
        success: true,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
export const logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "user logged out successfully",
    success: true,
  });
};
export const bookmark = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};
export const getmyprofile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getotherprofile = async (req, res) => {
  try {
    const id = req.params;
    const otheruserid = await User.findById({ _id: { $ne: id } }).select(
      "-password"
    );
    if (!otheruserid) {
      return res.status(401).json({
        message: "Do not have account",
        success: false,
      });
    }
    return res.status(200).json({
      otheruserid,
    });
  } catch (error) {
    console.log(error);
  }
};
export const follow = async (req, res) => {
  try {
    const loggedinuserid = req.body.id; //patel
    const userId = req.params.id; //arpit
    const loggedUser = await User.findById(loggedinuserid);
    const user = await User.findById(userId);
    if (!user.followers.includes(loggedinuserid)) {
      await user.updateOne({ $push: { followers: loggedinuserid } });
      await loggedUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User already followed to ${user.name}`,
      });
    }
    return res.status(200).json({
      message: `${loggedUser} just followed to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const unfollow = async (req, res) => {
  try {
    const loggedinuserid = req.body.id; //patel
    const userId = req.params.id; //arpit
    const loggedUser = await User.findById(loggedinuserid);
    const user = await User.findById(userId);
    if (!loggedUser.following.includes(userId)) {
      await user.updateOne({ $pull: { followers: loggedinuserid } });
      await loggedUser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(400).json({
        message: `User Has not followed yet`,
      });
    }
    return res.status(200).json({
      message: `${loggedUser.name} just unfollowed to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
