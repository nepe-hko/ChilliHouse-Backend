const Reading = require('../reading/Reading');
const sensorLib = require("node-dht-sensor");
const { BSON } = require('mongodb-stitch-server-sdk');


module.exports = function(sensor) {

    this.id = new BSON.ObjectID(sensor._id);
    this.type = sensor.type;
    this.name = sensor.name;
    this.pin = sensor.pin;
    this.interval = sensor.interval

    this.read = () => {

        var reading = sensorLib.read(22, this.pin);

        return new Reading({
            sensorId: this.id.toString(),
            value: reading.temperature.toFixed(1),
            date: new Date().getTime()
        });
    }
}