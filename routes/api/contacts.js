const express = require("express");
const router = express.Router();

const { validation, auth, controllerWrap } = require("../../middlewares");
const { joiSchema, favoriteJoiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

router.get("/", auth, controllerWrap(ctrl.getAll));

router.get("/:contactId", controllerWrap(ctrl.getById));

router.post("/", auth, validation(joiSchema), controllerWrap(ctrl.add));

router.put(
  "/:contactId",
  validation(joiSchema),
  controllerWrap(ctrl.refreshContact)
);

router.delete("/:contactId", controllerWrap(ctrl.delContact));

router.patch(
  "/:contactId/favorite",
  validation(favoriteJoiSchema),
  controllerWrap(ctrl.updateStatusContact)
);

module.exports = router;
