import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    if (!data) {
      return [];
    }
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(`Error reading contacts from ${PATH_DB}:`, error.message);
    throw error;
  }
};
