const express = require('express');
const router = express.Router();

// use controller
router.use('/history', require('./history'))
router.use('/device', require('./device'))


// default controller
router.get('/', (req, res) => res.send("HomeBox"));

module.exports = router;
