import express from "express";
import database from "./config/db.js";
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
database();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
