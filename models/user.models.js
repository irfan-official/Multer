import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fid: String,
    name: String,
    image: Buffer,
    mimetype: String,
    extention: String,
    compressionApplied: Boolean,
    beforeCompressionfileSize: String,
    afterCompressionfileSize: String,
  },
  { timestamp: true }
);

const User = new mongoose.model("User", userSchema);

export default User;
