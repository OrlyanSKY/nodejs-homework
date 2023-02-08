const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");
const avatarMaxSize = 2048;

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: avatarMaxSize,
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
