const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  phone: Joi.string().required(),
});

module.exports = contactSchema;