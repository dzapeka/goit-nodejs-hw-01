const crypto = require("node:crypto");
const fs = require("node:fs/promises");

const contactsPath = "./db/contacts.json";

async function readContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

async function writeContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, undefined, 2));
}

async function getAllContacts() {
  return await readContacts();
}

async function getContactById(contactId) {
  const contacts = await readContacts();
  const contact = contacts.find((contact) => contact.id === contactId) || null;
  return contact;
}

async function removeContact(contactId) {
  const contacts = await readContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) return null;
  const removedContact = contacts.splice(index, 1);
  await writeContacts(contacts);
  return removedContact;
}

async function addContact(name, email, phone) {
  const contacts = await readContacts();
  const newContact = { name, email, phone, id: crypto.randomUUID() };
  contacts.push(newContact);
  await writeContacts(contacts);
  return newContact;
}

module.exports = {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
};
