const TemperaturSensor = require('../sensor/TemperaturSensor');
const HumiditySensor = require('../sensor/HumiditySensor');

const Monitor = require('./Monitor');



exports.create = function() {
    const SensorRepository = require('../repository/SensorRepository');
    var Sensor = new SensorRepository();
    
    var monitors = [];

    Sensor.findAll()
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
