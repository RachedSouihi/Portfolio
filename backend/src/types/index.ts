export interface ContactFormData {
  name: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}