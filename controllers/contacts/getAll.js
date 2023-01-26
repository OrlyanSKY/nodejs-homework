const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const allContacts = await Contact.find({});
  res.json({
    status: "success",
    code: "200",
    data: {
      result: allContacts,
    },
  });
};

module.exports = getAll;
