const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({
    sensorId: Number,
    value: Number,
    type: String,
    unit: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reading', readingSchema);
