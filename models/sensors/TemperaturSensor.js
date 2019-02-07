const Reading = require('../Reading');

module.exports = function(sensorId) {

    this.sensorId = sensorId;

    this.read = () => {
        return new Reading({
            sensorId: this.sensorId,
            value: 24
        });
    }
}