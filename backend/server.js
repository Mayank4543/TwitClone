import express from "express";
import database from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/userRoutes.js";
import tweetRoute from "./Routes/tweetRoute.js";
import cors from "cors";
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
const corsOptions = {
  origin: "http://localhost:61122",
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tweet", tweetRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
