const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('./UserDetails');
const User = mongoose.model("UserInfo");
const axios = require('axios'); // ✅ move axios outside the route

async function validateCity(input) {
  const response = await axios.get('https://nominatim.openstreetmap.org/search', {
    params: {
      q: input,
      format: 'json',
      limit: 1,
      addressdetails: 1 // 👈 ensures 'address' is returned
    }
  });

  if (response.data.length === 0) return null;

  const match = response.data[0];
  const address = match.address || {};

  // Get the most specific city-like field available
  const cityName = address.city || address.town || address.village;

  return cityName || null;
}



router.post('/signup', async (req, res) => {
  const { email, password, name, city: rawCity, gender, age } = req.body;

  // ✅ Check for required fields first (use rawCity!)
  if (!email || !password || !name || !rawCity || !gender) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // ✅ Validate city with API
  const verifiedCity = await validateCity(rawCity);
  if (!verifiedCity) {
    return res.status(400).json({ error: 'City not found. Please enter a valid city.' });
  }

  try {
    const existingUser = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      name,
      password: hashedPassword,
      city: verifiedCity, // ✅ Matched city
      gender,
      age: parseInt(age) || null,
    });

    await newUser.save();
    res.status(201).json({ status: 'ok', message: 'User created' });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Server error during signup' });
  }
});

module.exports = router;
