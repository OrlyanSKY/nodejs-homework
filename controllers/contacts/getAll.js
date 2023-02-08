const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const allContacts = await Contact.find(
    favorite ? { owner: _id, favorite } : { owner: _id },
    "",
    {
      skip,
      limit,
    }
  ).populate("owner", "email , subscription");
  res.json({
    status: "success",
    code: "200",
    data: {
      result: allContacts,
    },
  });
};

module.exports = getAll;
