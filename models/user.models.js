import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: String,
    image: String,
  },
  { timestamp: true }
);

const User = new mongoose.model("User", userSchema);

export default User;
