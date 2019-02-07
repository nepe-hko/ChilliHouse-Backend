const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Request for Sensors");
    res.send('Sensors');
});

module.exports = router