import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  try {
    const emptyContacts = [];

    await writeContacts(emptyContacts);

    console.log('All contacts have been removed!');
  } catch (error) {
    console.error('Error removing contacts:', error.message);
    throw error;
  }
};

removeAllContacts();
