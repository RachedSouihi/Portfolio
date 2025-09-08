import express from 'express';
import { ContactController } from '../controllers/contactController';

const router = express.Router();
const contactController = new ContactController();

// Define the POST /contact route
router.post('/', (req, res) => contactController.handleContactForm(req, res));

export default router;