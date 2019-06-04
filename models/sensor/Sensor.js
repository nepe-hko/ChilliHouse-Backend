const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    id: Number,
    name: String,
    pin: Number,
    interval: Number,
    chart: String,
});

module.exports = mongoose.model('Sensor', sensorSchema);
