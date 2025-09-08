import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/contact'; // Replace with your actual API endpoint

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