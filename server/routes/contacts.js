import express from 'express';
import { getAllContacts, getContactsById, createContact, updateContact, deleteContact, deleteAllContacts } from '../controllers/contacts.js';

const router = express.Router();

router.get('/', getAllContacts);

router.get('/:id', getContactsById);

router.post('/', createContact);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

router.delete('/', deleteAllContacts);

export default router;
