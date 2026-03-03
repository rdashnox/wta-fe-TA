import { fail } from '@sveltejs/kit';

const BE_API_URL = 'http://localhost:3000/api/contact'; 

export const actions = {
  default: async ({ request }) => {

    try {
      const formData = await request.formData();

      const contactData = {
        name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        email: formData.get('email'),
        subject: formData.get('title'),
        message: formData.get('message'),
      };

      const response = await fetch(BE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        return fail(response.status, {
          message: errorData.message || 'Failed to send message',
        });
      }

      const result = await response.json();

      return {
        success: true,
        message: 'Message sent successfully!',
      };

    } catch (error) {
      return fail(500, {
        message: 'An error occurred: ' + error.message,
      });
    }
  },
};
