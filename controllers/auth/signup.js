const { User } = require("../../models");
const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }

  const hashedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const result = await User.create({ email, password: hashedPass, avatarURL });

  res.status(201).json({
    user: {
      email,
      subscription: result.subscription,
      avatarURL,
    },
  });
};

module.exports = signup;
