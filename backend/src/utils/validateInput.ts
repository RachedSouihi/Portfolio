import { Request, Response } from 'express';

interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateInput(data: ContactFormInput): string[] {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required.');
  }

  if (!data.email || data.email.trim().length === 0) {
    errors.push('Email is required.');
  } else {
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Email is invalid.');
    }
  }

  if (!data.subject || data.subject.trim().length === 0) {
    errors.push('Subject is required.');
  }

  if (!data.message || data.message.trim().length === 0) {
    errors.push('Message is required.');
  }

  if (data.message.length > 500) {
    errors.push('Message must not exceed 500 characters.');
  }

  return errors;
}