const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const MonitorCreator = require('./models/monitor/MonitorCreator')
const DeviceCreator = require('./models/devices/DeviceCreator')
const DeviceController = require('./models/devices/DeviceController')

const config = require('./config.json');
const sensorsConfig = config.sensors;
const devicesConfig = config.devices;
const sensors = config.sensors;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

init();

function init() {
    
    // Create Monitors

    const monitors = MonitorCreator.create()
    monitors.forEach( monitor => monitor.start());

    //Cerate Devices
    //const devices = DeviceCreator.create(devicesConfig)
    //DeviceController.init(devices)
}

module.exports = app;