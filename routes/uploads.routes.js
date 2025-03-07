import userModel from "../models/user.models.js";
import path from "path";
import express from "express";
import upload from "../services/multer.js";

const route = express.Router();
export default route;

route.get("/avatar", (req, res, next) => {
  return res.status(200).render("uploads");
});

route.post("/avatar", upload.single("image"), async (req, res) => {
  try {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fid =
      req.file.fieldname +
      "-" +
      uniqueSuffix +
      path.extname(req.file.originalname);
    let createdAvatar = await userModel.create({
      fid,
      name: req.file.fieldname,
      image: req.file.buffer,
      mimetype: req.file.mimetype,
      extention: req.file.mimetype.split("/")[1],
    });
    console.log(req.file);
    return res.json({
      message: "File upload successfull",
      url: `/avatar/${createdAvatar.fid}`,
    });
  } catch (err) {
    return res.status(404).redirect("/uploads/avatar");
  }
});

route.get("/allavatar", async (req, res, next) => {
  let allAvatar = await userModel.find();
  return res.status(200).render("show_all", { data: allAvatar });
});
