const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({
    sensorId: Number,
    value: Number,
    date: Number
});

module.exports = mongoose.model('Reading', readingSchema);
