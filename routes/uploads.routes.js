import userModel from "../models/user.models.js";

import express from "express";
import upload from "../services/multer.js";

const route = express.Router();
export default route;

route.get("/avatar", (req, res, next) => {
  return res.status(200).render("signup");
});

route.post("/avatar", upload.single("image"), async (req, res) => {
  try {
    // await userModel.create({
    //   name: req.file.fieldname,
    //   image: req.file.filename,
    // });
    return res.json({ message: "File upload successfull", log: req.file });
  } catch (err) {
    return res.status(404).redirect("/uploads/avatar");
  }
});
