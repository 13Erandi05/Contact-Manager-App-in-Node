//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create New contact
//@route GET /api/contacts
//@access public
const createContact = async (req, res) => {
  console.log("The Request Body: ", req.body);
  const { Name, Email, Phone } = req.body;
  if (!Name || !Email || !Phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  res.status(201).json({ message: "Create contacts" });
};

//@desc Update contact
//@route GET /api/contacts
//@access public
const updateContact = async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Get contact by ID
//@route GET /api/contacts
//@access public
const getContactByID = async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Delete contact
//@route GET /api/contacts
//@access public
const deleteContact = async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  updateContact,
  getContactByID,
  deleteContact,
};
