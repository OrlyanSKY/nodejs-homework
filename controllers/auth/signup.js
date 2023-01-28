const { User } = require("../../models");
const createError = require("http-errors");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const result = await User.create({ email, password });
  res.status(201).json({
    user: {
      result,
    },
  });
};

module.exports = signup;
