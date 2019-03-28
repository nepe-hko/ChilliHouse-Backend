const Reading = require('../reading/Reading');
const sensorLib = require("node-dht-sensor");


module.exports = function(sensorConfig) {

    this.name = sensorConfig.name;
    this.pin = sensorConfig.pin;
    this.sensorId = sensorConfig.id;
    this.type = 22;

    this.read = () => {

        var reading = sensorLib.read(this.type, this.pin);

        return new Reading({
            sensorId: this.sensorId,
            value: reading.temperature.toFixed(1),
            date: new Date().getTime()
        });
    }
}