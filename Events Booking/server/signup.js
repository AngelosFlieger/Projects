const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('./UserDetails');
const User = mongoose.model("UserInfo");

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    const oldUser = await User.findOne({ email: email }).collation({ locale: 'en', strength: 2 });
    if (oldUser) {
        return res.send({ data: "User already exists!" });
    }
    
    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            email: email,
            password: encryptedPassword,
        });
        res.send({ status: "ok", data: "User Created" })
    } catch (error) {
        res.send({ status: "error", data: error })
    }
});

module.exports = router;