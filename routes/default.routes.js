import userModel from "../models/user.models.js";

import express from "express";

const route = express.Router();

route.get("/", (req, res, next) => {
  return res.status(200).json({
    GET_uploads: `/uploads/avatar`,
    GET_allUploads: `/uploads/allavatar`,
    GET_avatar: `/avatar/avatar.ext`,
  });
});

route.get("/avatar/:fid", async (req, res, next) => {
  let { fid } = req.params;
  let Avatar = await userModel.findOne({ fid });
  if (!Avatar) {
    return res.status(404).send("Image not found");
  }
  res.set("Content-Type", Avatar.mimetype);
  return res.status(200).send(Avatar.image);
  // return res.status(200).render("show_one", { data: Avatar });
});

export default route;
