const express = require('express');
const router = express.Router();
const ContactForm = require('../models/ContactForm');

// Get all contact form submissions
router.get('/', async (req, res) => {
  try {
    const contacts = await ContactForm.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single contact form
router.get('/:id', async (req, res) => {
  try {
    const contact = await ContactForm.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create contact form submission
router.post('/', async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    const contact = new ContactForm({
      fullName,
      email,
      mobile,
      city
    });

    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete contact form
router.delete('/:id', async (req, res) => {
  try {
    const contact = await ContactForm.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
