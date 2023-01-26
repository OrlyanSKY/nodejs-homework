const createError = require("http-errors");
const { updateContact } = require("../../models/contacts");

const refreshContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);

  if (!result) {
    throw createError(404, "Contact is not found");
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = refreshContact;
