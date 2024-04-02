const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContactByID,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);

router
  .route("/:id")
  .put(updateContact)
  .get(getContactByID)
  .delete(deleteContact);

module.exports = router;
