const TemperaturSensor = require('../sensor/TemperaturSensor');
const HumiditySensor = require('../sensor/HumiditySensor');
const Monitor = require('./Monitor');

exports.create = function(sensorsConfig) {
    
    var monitors = [];
    
    sensorsConfig.forEach( sensorConfig => {

        var newSensor;
        
        if (sensorConfig.type == "humidity") {
            newSensor = new HumiditySensor(sensorConfig);
        }
        else if (sensorConfig.type = "temperature") {
            newSensor = new TemperaturSensor(sensorConfig);
        }
        
        monitors.push( new Monitor(newSensor));
    });
    
    return monitors;
}
