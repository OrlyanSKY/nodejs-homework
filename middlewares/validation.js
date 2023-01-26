const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const requiredField = error.details[0].context.key;

      error.status = 400;
      error.message = `missing required field - ${requiredField} `;
      next(error);
    }
    next();
  };
};

module.exports = validation;
