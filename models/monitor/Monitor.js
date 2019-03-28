const CronJob = require('cron').CronJob;

module.exports = function(sensor){

    this.sensor = sensor;

    var job = new CronJob('0 * * * * *', () => {
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