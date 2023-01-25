const { removeContact } = require("../../models/contacts");
const createError = require("http-errors");

const delContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await removeContact(contactId);
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
  } catch (error) {
    next(error);
  }
};

module.exports = delContact;
