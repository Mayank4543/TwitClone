import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "../config./.env",
});
const database = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default database;
