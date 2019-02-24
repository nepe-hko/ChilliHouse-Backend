const express = require('express');
const router = express.Router();
const Reading = require('../models/reading/Reading');
const ChartConfigBuilder = require('../models/chart/ChartConfigBuilder');

const config = require('../config.json');



router.get('/', (req, res) => {  
    console.log("Request for Readings");
    res.send('History');
});

router.get('/:historyId', (req, res) => {

    var historyId = req.params.historyId;
    var readingsFromAllSensors = [];
    
    config.historys[historyId].sensors.forEach( sensorId => {
        readingsFromAllSensors.push( Reading.find({ sensorId: sensorId }).exec());       
    });
    
    Promise.all(readingsFromAllSensors)
    .then( readingsFromAllSensors => {
        var chartConfig = ChartConfigBuilder.build(readingsFromAllSensors, config);
        res.render('history', {config : chartConfig});
    })
    .catch( err => {
        console.log(err);
        res.send("Something went Wrong! ${err}")
    });

});

module.exports = router