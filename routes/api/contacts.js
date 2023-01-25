const express = require("express");
const router = express.Router();

const { validation, controllerWrap } = require("../../middlewares");
const { contactSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

router.get("/", controllerWrap(ctrl.getAll));

router.get("/:contactId", controllerWrap(ctrl.getById));

router.post("/", validation(contactSchema), controllerWrap(ctrl.add));

router.put(
  "/:contactId",
  validation(contactSchema),
  controllerWrap(ctrl.refreshContact)
);

router.delete("/:contactId", controllerWrap(ctrl.delContact));

module.exports = router;
