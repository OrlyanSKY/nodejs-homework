const createError = require("http-errors");
const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const resendVerifyMail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(404, "User not found");
  }
  if (user.verify) {
    throw createError(400, "Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "verify your email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">verify your email</a>`,
  };
  await sendEmail(mail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyMail;
