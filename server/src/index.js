import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.js";

dotenv.config();

const password = process.env.MONGO_PASSWORD;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  `mongodb+srv://franklinrohan:${password}@cluster0.etmg3so.mongodb.net/Cluster0?retryWrites=true&w=majority`
);

app.listen(2001, () => {
  console.log("Listening to port 2001");
});
