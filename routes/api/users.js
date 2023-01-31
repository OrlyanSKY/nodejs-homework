const express = require("express");
const router = express.Router();
const { auth, controllerWrap } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

router.get("/current", auth, controllerWrap(ctrl.getCurrent));

module.exports = router;
