import express from "express";
import contactControllers from "../../controllers/contact.controllers.js";
import { isEmptyBody, isValidId } from "../../middleware/index.js";
import {
  contactsAddSchema,
  contactUpdateFavoriteSchema,
} from "../../models/contact.js";
import validateBody from "../../decorators/validateBody.js";

const contactAddValidate = validateBody(contactsAddSchema);

const contactUpdateFavoriteValidate = validateBody(contactUpdateFavoriteSchema);

const router = express.Router();

router.get("/", contactControllers.getAllContacts);

router.get("/:id", isValidId, contactControllers.getById);

router.post("/", isEmptyBody, contactAddValidate, contactControllers.add);

router.delete("/:id", isValidId, contactControllers.removeById);

router.put(
  "/:id",
  isValidId,
  isEmptyBody,
  contactAddValidate,
  contactControllers.updateById
);
router.patch(
  "/:id/favorite",
  isValidId,
  contactUpdateFavoriteValidate,
  contactControllers.updateFavorite
);

export default router;
