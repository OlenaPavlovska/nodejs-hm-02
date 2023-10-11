import * as contactService from "../models/contacts.js";
import HttpError from "../helpers/http.errors.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAllContacts = async (req, res) => {
  const result = await contactService.listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactService.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const { body } = req;
  const result = await contactService.addContact(body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const { body } = req;
  const result = await contactService.updateContact(contactId, body);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactService.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Delete success",
  });
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  removeById: ctrlWrapper(removeById),
};
