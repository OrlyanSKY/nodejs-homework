const express = require("express");
const router = express.Router();
const { validation, controllerWrap } = require("../../middlewares");

const { auth: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/user");

router.post("/signup", validation(joiSchema), controllerWrap(ctrl.signup));
router.get("/login", validation(joiSchema), controllerWrap(ctrl.login));

module.exports = router;
