const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const Sensor = require('./models/sensor/Sensor');
const MonitorCreator = require('./models/monitor/MonitorCreator')

const config = require('./config.json');
const sensorsConfig = config.sensors;
const sensors = config.sensors;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

init();

function init() {
    
    const monitors = MonitorCreator.create(sensorsConfig)
    monitors.forEach( monitor => monitor.start());
    Sensor.remove().exec().catch(err => console.log(err));
    sensors.forEach( sensor => {
        new Sensor({
            id: sensor.id,
            name: sensor.name,
            pin: sensor.pin,
            interval: sensor.interval,
        }).save();
    });
}

module.exports = app;