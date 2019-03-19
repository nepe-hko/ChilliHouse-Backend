const express = require('express');
const router = express.Router();
const Reading = require('../models/reading/Reading');
const config = require('../config.json');

router.get('/', (req, res) => {  

    var history = config
    var promises = []

    for (let i = 0; i < history.sensors.length; i++) {

        promises[i] = Reading.find({ sensorId: history.sensors[i].id }).exec();
        promises[i]
        .then( readings => history.sensors[i].data = readings)
        .catch( err => log(err) );
    }
    
    Promise.all(promises)
    .then( promises => res.send(JSON.stringify(history)))
    .catch( err => console.log(err));

});
module.exports = router