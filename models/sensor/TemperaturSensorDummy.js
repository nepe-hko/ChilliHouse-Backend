const Reading = require('../reading/Reading');

module.exports = function(sensorConfig) {

    this.name = sensorConfig.name;
    this.pin = sensorConfig.pin;
    this.sensorId = sensorConfig.id;

    this.read = () => {
        return new Reading({
            sensorId: this.sensorId,
            value: Math.floor((Math.random()*33) + 15),
            date: new Date().getTime()
        });
    }
}