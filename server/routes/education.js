import express from 'express';
import {getAllEducations, getEducationById, createEducation, deleteEducation, updateEducation} from '../controllers/education.js';
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getAllEducations);

router.get('/:id', getEducationById);

router.post('/', authMiddleware, createEducation);

router.put('/:id', authMiddleware, updateEducation);

router.delete('/:id', authMiddleware, deleteEducation);

export default router;
