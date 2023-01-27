const { Contact } = require("../../models");
const createError = require("http-errors");

const delContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw createError(404, "Not found");
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
      message: "contact deleted",
    },
  });
};

module.exports = delContact;
