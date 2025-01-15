import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    console.log('Contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    throw error;
  }
};

console.log(await getAllContacts());
