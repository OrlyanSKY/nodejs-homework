const { User } = require("../../models");

const patchSub = async (req, res) => {
  console.log(req.user);
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, { new: true });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      subscription: result.subscription,
    },
  });
};

module.exports = patchSub;
