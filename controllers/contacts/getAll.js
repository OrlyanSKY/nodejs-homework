const { listContacts } = require("../../models/contacts");

const getAll = async (req, res) => {
  const allContacts = await listContacts();
  res.json({
    status: "success",
    code: "200",
    data: {
      result: allContacts,
    },
  });
};

module.exports = getAll;
