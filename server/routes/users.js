import express from 'express';
import { getAllUsers, getUsersById, createUser, updateUser, deleteUser, deleteAllUsers } from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUsersById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.delete('/', deleteAllUsers);

export default router
