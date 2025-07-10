import express from 'express';
import { getAllContacts, getContactsById, createContact, updateContact, deleteContact, deleteAllContacts } from '../controllers/contacts.js';
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getAllContacts);

router.get('/:id', getContactsById);

router.post('/', createContact);

router.put('/:id', updateContact);

router.delete('/:id', authMiddleware, deleteContact);

router.delete('/', authMiddleware, deleteAllContacts);

export default router;

