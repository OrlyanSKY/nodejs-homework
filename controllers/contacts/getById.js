const { getContactById } = require("../../models/contacts");
const createError = require("http-errors");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
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
