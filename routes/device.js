const express = require('express');
const router = express.Router();
const DeviceController = require('../models/devices/DeviceController');

router.post('/command', (req, res) => {
    //TODO: Request Parameter prüfen
    var command = {
        deviceId : req.params.deviceId,
        value : req.params.value
    }
    DeviceController.action(command);
    res.sendStatus(200);
});

module.exports = router