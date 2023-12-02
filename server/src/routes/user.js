import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "User already exisits" });
  }

  const hasedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hasedPassword });
  await newUser.save();

  res.json({ message: "User registed Successfully!" });
});

router.post("/login");

export { router as userRouter };
