const { listContacts } = require("../../models/contacts");

const getAll = async (req, res, next) => {
  try {
    const allContacts = await listContacts();
    res.json({
      status: "success",
      code: "200",
      data: {
        result: allContacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
