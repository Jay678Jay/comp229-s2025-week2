import express from 'express';
import { getAllContacts, getContactsById, createContact, updateContact, deleteContact, deleteAllContacts } from '../controllers/contacts.js';
import authMiddleware from '../middlewares/auth.js';
import adminAuth from '../middlewares/adminAuth.js';

const router = express.Router();

router.get('/', getAllContacts);

router.get('/:id', getContactsById);

router.post('/', authMiddleware, createContact);

router.put('/:id', authMiddleware, adminAuth, updateContact);

router.delete('/:id', authMiddleware, adminAuth, deleteContact);

router.delete('/', authMiddleware, adminAuth, deleteAllContacts);

export default router;

