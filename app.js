const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const Monitor = require('./models/monitor/Monitor');
const Sensor = require('./models/sensor/Sensor');
const History = require('./models/history/History');

const config = require('./config.json');
const sensorsConfig = config.sensors;
const historys = config.historys;
const sensors = config.sensors;



const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

init();

function init() {
    
    const monitors = require('./models/monitor/MonitorCreator').create(sensorsConfig)
    monitors.forEach( monitor => monitor.start());
    Sensor.remove();
    sensors.forEach( sensor => {
        new Sensor({
            id: sensor.id,
            name: sensor.name,
            pin: sensor.pin,
            interval: sensor.interval,
            historyStyle: sensor.historyStyle
        }).save();
    });

}




module.exports = app;