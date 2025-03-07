import multer from "multer";
import path from "path";

// Disk storage
// const Diskstorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     let ext = path.extname(file.originalname).split(".");
//     console.log(ext);
//     let filePath = `./public/images/uploads/${ext[1]}`;
//     cb(null, filePath);
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(
//       null,
//       file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
//     );
//   },
// });
// Memory Storage
const Memorystorage = multer.memoryStorage();
const upload = multer({
  storage: Memorystorage,
});
export default upload;
