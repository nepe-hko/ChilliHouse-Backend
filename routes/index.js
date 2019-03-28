const express = require('express');
const router = express.Router();

// use controller
router.use('/sensor', require('./sensor'));
router.use('/reading', require('./reading'));
router.use('/history', require('./history'))

// default controller
router.get('/', (req, res) => res.send("HomeBox"));

module.exports = router;
