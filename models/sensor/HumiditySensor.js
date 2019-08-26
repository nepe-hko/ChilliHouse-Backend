const Reading = require('../reading/Reading');
const sensorLib = require("node-dht-sensor");


module.exports = function(sensor) {

    this.name = sensor.name;
    this.pin = sensor.pin;
    this.sensorId = sensor._id.toHexString();
    this.type = 22;

    this.read = () => {

        var reading = sensorLib.read(this.type, this.pin);

        return new Reading({
            sensorId: this.sensorId,
            value: reading.humidity.toFixed(0),
            date: new Date().getTime()
        });
    }
}