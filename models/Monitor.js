const Reading = require('./Reading');
const CronJob = require('cron').CronJob;

module.exports = function(sensor){

    this.sensor = sensor;
    
    this.job = new CronJob('*/10 * * * * *', () => {
        var reading = this.sensor.read();
        reading.save();
        console.log("New Reading added");
    });
    
    this.start = () => {
        this.job.start();
        console.log("Monitor started");
    };

    this.stop = () => {
        this.job.stop();
    };

}