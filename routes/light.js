const express = require('express');
const router = express.Router();
const Light = require('../models/light/Light')



router.get('/on', (req, res) => {  
    l.on()
});

router.get('/off', (req, res) => {  
    l.off()
});

module.exports = router