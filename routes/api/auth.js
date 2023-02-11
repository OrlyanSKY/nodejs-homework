const express = require("express");
const router = express.Router();

const { validation, auth, controllerWrap } = require("../../middlewares");

const { auth: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/user");

router.post("/signup", validation(joiSchema), controllerWrap(ctrl.signup));
router.get("/login", validation(joiSchema), controllerWrap(ctrl.login));
router.get("/logout", auth, controllerWrap(ctrl.logout));

module.exports = router;
