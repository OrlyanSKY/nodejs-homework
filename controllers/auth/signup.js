const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }

  const hashedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const result = await User.create({
    email,
    password: hashedPass,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "verify your email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">verify your email</a>`,
  };
  await sendEmail(mail);

  res.status(201).json({
    user: {
      email,
      subscription: result.subscription,
      avatarURL,
    },
  });
};

module.exports = signup;
