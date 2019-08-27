const Reading = require('../reading/Reading');
const sensorLib = require("node-dht-sensor");


module.exports = function(sensor) {

    this.id = sensor._id.$oid;
    this.type = sensor.type;
    this.name = sensor.name;
    this.pin = sensor.pin;
    this.interval = sensor.interval

    this.read = () => {

        var reading = sensorLib.read(22, this.pin);

        return new Reading({
            sensorId: this.id,
            value: reading.humidity.toFixed(0),
            date: new Date().getTime()
        });
    }
}