const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();
  const singleContact = allContacts.find((contact) => contact.id === contactId);
  if (!singleContact) {
    return null;
  }
  return singleContact;
};

const removeContact = async (contactId) => {
  const allContacts = await listContacts();
  const constactIndex = await allContacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (constactIndex === -1) {
    return null;
  }
  const [removedContact] = allContacts.splice(constactIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));

  return removedContact;
};

const addContact = async (body) => {
  const allContacts = await listContacts();
  const id = nanoid();

  const newContact = {
    id,
    ...body,
  };

  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));

  return newContact;
};

const updateContact = async (contactId, body) => {
  const allContacts = await listContacts();
  const contactIndex = allContacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIndex === -1) {
    return null;
  }
  allContacts[contactIndex] = { contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));

  return allContacts[contactIndex];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
