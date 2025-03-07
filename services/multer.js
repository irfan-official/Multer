import multer from "multer";
import path from "path";

function fileFilter(req, file, cb) {
  const extensions = [".png", ".jpeg", ".jpg", ".webp", ".avif"];
  let ext = path.extname(file.originalname);

  if (!extensions.includes(ext)) {
    cb(new Error("File is not accepted"), false);
  } else {
    cb(null, true);
  }
}

// // Disk storage
const Diskstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let ext = path.extname(file.originalname).split(".");
    console.log(ext);
    let filePath = `./public/images/uploads/${ext[1]}`;
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
// // Memory Storage
const Memorystorage = multer.memoryStorage();
const upload = multer({
  storage: Memorystorage,
  fileFilter: fileFilter,
  limits: { fileSize: 20 * 1024 * 1024 },
});
export default upload;
