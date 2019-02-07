const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({
    sensorId: String,
    value: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reading', readingSchema);
