import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();

    const count = contacts.length;
    console.log(`Total contacts: ${count}`);
    return count;
  } catch (error) {
    console.error('Error counting contacts:', error.message);
    throw error;
  }
};

console.log(await countContacts());
