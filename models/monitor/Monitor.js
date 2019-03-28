const CronJob = require('cron').CronJob;

module.exports = function(sensor){

    this.sensor = sensor;

    var job = new CronJob('0 * * * * *', () => {
        var reading = this.sensor.read();
        reading.save();
    });
    
    this.start = () => job.start();
    this.stop = () => this.job.stop();
    
}