const TemperaturSensor = require('../sensor/TemperaturSensor');
const HumiditySensor = require('../sensor/HumiditySensor');
const SensorRepository = require('../repository/SensorRepository');
const Monitor = require('./Monitor');

exports.create = function() {

    Sensor = new SensorRepository();
    
    var monitors = [];

    Sensor.findall()
    .then( sensors => {
        sensors.forEach( sensor => {
            var newSensor;
            switch (sensor.type) {

            case "humidity":
                newSensor = new HumiditySensor(sensor);
                break;

            case "temperature":
                newSensor = new TemperaturSensor(sensor);
                break;
        }
        monitors.push( new Monitor(newSensor));
        });
    });
    
    return monitors;
}
