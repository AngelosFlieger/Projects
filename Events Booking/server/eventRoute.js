// eventRoute.js
const express = require('express');
const router = express.Router();
const upload = require('./config/multer'); // Import multer with Cloudinary storage
const Event = require('./Event'); // Import your Event model

// Route to handle event creation
router.post('/eventRoute', upload.single('image'), async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const imageUrl = req.file.path; // Get the URL of the uploaded image

    // Create a new event
    const newEvent = new Event({
      title,
      description,
      price,
      imageUrl,
    });

    // Save the event to the database
    await newEvent.save();
    
    res.status(201).send(newEvent); // Return the created event
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: 'Error creating event' });
  }
});

// Route to fetch all events
router.get('/eventRoute', async (req, res) => {
  try {
    const events = await Event.find(); // Assuming Event is your model
    res.status(200).json(events); // Return all events
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error fetching events' });
  }
});

// Route to delete an event by ID
router.delete('/eventRoute/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the event ID from the URL
    const deletedEvent = await Event.findByIdAndDelete(id); // Find the event by ID and delete it

    if (!deletedEvent) {
      return res.status(404).send({ message: 'Event not found' }); // If no event is found, return a 404
    }

    res.status(200).send({ message: 'Event deleted successfully' }); // Return success message
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error deleting event' }); // Catch and return any errors
  }
});

module.exports = router;
