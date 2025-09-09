import { Request, Response } from 'express';
import sendEmail from '../services/emailService';
import { validateInput } from '../utils/validateInput';

export class ContactController {
  public async handleContactForm(req: Request, res: Response): Promise<void> {
    try {
  const { name, email, subject, message } = req.body;

      // Validate input
  const validationErrors = validateInput({ name, email, subject, message });
      if (validationErrors.length > 0) {
        res.status(400).json({ errors: validationErrors });
        return;
      }

      // Send email
  await sendEmail(name, email, subject, message);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error handling contact form:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}