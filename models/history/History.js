const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    id: Number,
    name: String,
    sensors: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Sensor'}
    ]
});

module.exports = mongoose.model('History', historySchema);
