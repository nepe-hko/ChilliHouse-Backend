const Reading = require('../reading/Reading');
const CronJob = require('cron').CronJob;
const HumiditySensor = require('../sensor/HumiditySensor');
const TemperaturSensor = require('../sensor/TemperaturSensor');

module.exports = function(sensor){

    

    this.sensor = sensor;

    var job = new CronJob('*/30 * * * * *', () => {
        var reading = this.sensor.read();
        reading.save();
        console.log("New Reading added");
    });
    
    this.start = () => {
        job.start();
        console.log("Monitor started");
    };

    this.stop = () => {
        this.job.stop();
    };
    
    
}

exports.create = function (sensorConfig) {
    log("create monitors");
}