const express = require('express');
const router = express.Router();
const DeviceController = require('../models/devices/DeviceController');

router.post('/command',urlencodedParser, (req, res) => {
    //TODO: Request Parameter prüfen
    var command = {
        deviceId : req.body.deviceId,
        value : req.body.value
    }
    console.log(req.body.deviceId);
    
    DeviceController.action(command);
    res.sendStatus(200);
});

module.exports = router