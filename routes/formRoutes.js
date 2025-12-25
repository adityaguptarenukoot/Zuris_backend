import express from 'express';
import { submitForm } from '../controllers/formController.js';

const router = express.Router();

// POST /api/form/submit
router.post('/submit', submitForm);

export default router;
