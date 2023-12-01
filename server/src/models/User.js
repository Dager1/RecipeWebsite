import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  passwor: { type: String, require: true },
});

export const UserModel = mongoose.model("users", UserSchema);
