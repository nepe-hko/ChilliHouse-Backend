const express = require('express');
const router = express.Router();
const DeviceController = require('../models/devices/DeviceController');

router.post('/:deviceId/:value', (req, res) => {
    //TODO: Request Parameter prüfen
    var command = {
        deviceId : req.params.deviceId,
        value : req.params.value
    }
    console.log(req.params.deviceId);
    
    DeviceController.action(command);
    res.sendStatus(200);
});

router.get('/', (req, res) => {
    res.send(JSON.stringify(DeviceController.getDevices()))
});

module.exports = router