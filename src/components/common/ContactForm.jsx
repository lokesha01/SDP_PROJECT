import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic to handle form submission
  };

  return (
    <Container sx={{ padding: '2rem', backgroundColor: 'rgb(238, 238, 238)' ,marginTop: '50px'}}>
      <Box sx={{ backgroundColor: 'sky blue', padding: '2rem', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'League Spartan, sans-serif', color: 'rgb(32, 30, 67)' }}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            sx={{ marginBottom: '1rem', backgroundColor: 'white' }}
          />
          <TextField
            name="email"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            sx={{ marginBottom: '1rem', backgroundColor: 'white' }}
          />
          <TextField
            name="message"
            label="Message"
            fullWidth
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            sx={{ marginBottom: '1rem', backgroundColor: 'white' }}
          />
          <Button type="submit" variant="contained" sx={{ backgroundColor: 'rgb(32, 30, 67)', color: 'rgb(165, 215, 232)' }}>
            Send Message
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
