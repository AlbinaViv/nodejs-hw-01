import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`${number} new contacts successfully added.`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
    throw error;
  }
};

generateContacts(5);
