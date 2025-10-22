import axios from 'axios';


export const submitContactForm = async (formData: any) => {
  try {
    console.log('Submitting form data:', formData);
    const response = await axios.post("https://portfolio-backend-vo7e.onrender.com/contact", formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
