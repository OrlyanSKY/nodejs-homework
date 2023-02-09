const express = require("express");
const router = express.Router();
const {
  auth,
  controllerWrap,
  upload,
  validation,
} = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { subscriptionSchema } = require("../../models/user");

router.get("/current", auth, controllerWrap(ctrl.getCurrent));
router.patch(
  "/",
  auth,
  validation(subscriptionSchema),
  controllerWrap(ctrl.patchSub)
);
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  controllerWrap(ctrl.updateAvatar)
);

module.exports = router;
