import userModel from "../models/user.models.js";
import path from "path";
import express from "express";
import upload from "../services/multer.js";
import sharp from "sharp";

const route = express.Router();
export default route;

route.get("/avatar", (req, res, next) => {
  return res.status(200).render("uploads");
});

route.post("/avatar", upload.single("image"), async (req, res) => {
  try {
    async function newbuffer(file_buffer, mimetype) {
      let image = sharp(file_buffer).resize({ width: 1920, fit: "inside" });

      if (mimetype === "image/png") {
        req.file.mimetype = "image/jpeg";
        image = image.jpeg({ quality: 80 }); // Convert PNG to JPEG for compression
      } else {
        image = image.toFormat(mimetype.split("/")[1], { quality: 80 });
      }

      return await image.toBuffer();
    }

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const fid =
      req.file.fieldname +
      "-" +
      uniqueSuffix +
      path.extname(req.file.originalname);

    let fileSizeBefore = req.file.size / (1024 * 1024); // Convert to MB

    // Apply compression if file size is 2MB or more
    let compressedBuffer =
      fileSizeBefore >= 1
        ? await newbuffer(req.file.buffer, req.file.mimetype)
        : req.file.buffer;

    // Get file size after compression
    let fileSizeAfter = compressedBuffer.length / (1024 * 1024); // Convert to MB

    let createdAvatar = await userModel.create({
      fid,
      name: req.file.fieldname,
      image: compressedBuffer,
      mimetype: req.file.mimetype,
      extension: req.file.mimetype.split("/")[1], // Fixed typo in 'extension'
      compressionApplied: fileSizeBefore >= 2 ? true : false,
      beforeCompressionfileSize: fileSizeBefore.toFixed(2) + " MB", // Store file size as a readable string
      afterCompressionfileSize: fileSizeAfter.toFixed(2) + " MB", // Store file size as a readable string
    });

    // console.log(req.file);

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
