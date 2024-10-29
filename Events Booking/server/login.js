const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('./UserDetails');
const User = mongoose.model("UserInfo");
const JWT_SECRET = "cbdkhbfehvfhjvehj()w2u43734gy33f48[][uy34843tfogfruyg3487";

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const oldUser = await User.findOne({ email: email }).collation({ locale: 'en', strength: 2 });

    if (!oldUser) {
        return res.send({ data: "User doesn't exist!" });
    }

    const isPasswordValid = await bcrypt.compare(password, oldUser.password);
    
    if (!isPasswordValid) {
        return res.send({ status: "error", data: "Wrong password" });
    }

    if (await bcrypt.compare(password, oldUser.password)) {
        const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);

        if (res.status(201)) {
            return res.send({ status: "ok", data: token });
        } else {
            return res.send({ status: "error", data: error });
        }
    }
});

module.exports = router;