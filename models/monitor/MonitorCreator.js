const TemperaturSensor = require('../sensor/TemperaturSensor');
const HumiditySensor = require('../sensor/HumiditySensor');
const Monitor = require('./Monitor');

exports.create = function(sensorsConfig) {
    
    var monitors = [];
    
    sensorsConfig.forEach( sensorConfig => {

        var sensor;
        switch (sensorConfig.type) {

            case "humidity":
                sensor = new HumiditySensor(sensorConfig);
                break;

            case "temperature":
                sensor = new TemperaturSensor(sensorConfig);
                break;
        }
        monitors.push( new Monitor(sensor));
    });
    return monitors;
}
