import express from "express";
import database from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/userRoutes.js";
import tweetRoute from "./Routes/tweetRoute.js";
dotenv.config({
  path: ".env",
});
database();
const app = express();
// middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tweet", tweetRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
