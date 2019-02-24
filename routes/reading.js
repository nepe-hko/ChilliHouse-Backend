const express = require('express');
const router = express.Router();
const Reading = require('../models/reading/Reading')

router.get('/', (req, res) => {  
    console.log("Request for Readings");
    res.send('Readings');
});

// returns all readings from sensor with given sensorId
router.get('/all/:sensorId', (req, res) => {
    Reading.find({ sensorId: req.params.sensorId })
    .then((readings) => {
        //typ von readings bestimmen
        var type = "temperature"
        res.render('history', { title: 'History', readings : readings, type: type });
    })
    .catch( (err) => {
        res.send('Sorry! Something went wrong.'); 
    });

});


// returns last reading from sensor with given sensorId
router.get('/last/:sensorId', (req, res) => {
    Reading.find({ sensorId: req.params.sensorId }).limit(1).sort({$natural:-1})
    .then((readings) => {
        //typ von readings bestimmen
        var type = "temperature"
        res.render('history', { title: 'History', readings : readings, type: type });
    })
    .catch( () => { 
        res.send('Sorry! Something went wrong.'); 
    });

});

module.exports = router