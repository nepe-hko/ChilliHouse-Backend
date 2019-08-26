const CronJob = require('cron').CronJob;
const ReadingRepository = require('../repository/ReadingRepository');
var Reading = new ReadingRepository();
module.exports = function(sensor){

    this.sensor = sensor;

    var job = new CronJob('0 */15 * * * *', () => {
        var reading = this.sensor.read();
        Reading.add(reading)
        .catch( err => console.log(err));
    });
    
    this.start = () => job.start();
    this.stop = () => this.job.stop();
    
}