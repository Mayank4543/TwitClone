import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
  path: "../config./.env",
});
const isAuthenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).jaon({
        message: "You are not authenticated",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decode);
    req.user = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};
export default isAuthenticate;
