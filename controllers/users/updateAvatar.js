const { User } = require("../../models");

const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../../", "public/avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const uniqueAvatarName = `${id}_${originalname}`;

  try {
    const resultUpload = path.join(avatarDir, uniqueAvatarName);

    await Jimp.read(tempUpload).then((avatar) => {
      return avatar.resize(250, 250).write(resultUpload); // resize Avatar
    });
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("public/avatars", uniqueAvatarName);

    await User.findByIdAndUpdate(req.user._id, {
      avatarURL,
    });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
