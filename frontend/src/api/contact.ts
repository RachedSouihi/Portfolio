import axios from 'axios';

const API_URL = 'https://portfolio-backend-vo7e.onrender.com/contact';

export const submitContactForm = async (formData: any) => {
  try {
    console.log('Submitting form data:', formData);
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};