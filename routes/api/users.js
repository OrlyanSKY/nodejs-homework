const express = require("express");
const router = express.Router();
const {
  auth,
  controllerWrap,
  upload,
  validation,
} = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { subscriptionSchema, verifyEmailSchema } = require("../../models/user");

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
router.get("/verify/:verificationToken", controllerWrap(ctrl.verifyEmail));
router.post(
  "/verify",
  validation(verifyEmailSchema),
  controllerWrap(ctrl.resendVerifyMail)
);
module.exports = router;
