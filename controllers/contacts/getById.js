const { Contact } = require("../../models");
const createError = require("http-errors");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if (!result) {
    throw createError(404, "Not found");
  }
  res.json({
    status: "success",
    code: "200",
    data: {
      result,
    },
  });
};

module.exports = getById;
