const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const Monitor = require('./models/monitor/Monitor');

const config = require('./config.json');
const sensorsConfig = config.sensors;
global.historys = config.historys;
global.sensors = config.sensors;



const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

const monitors = require('./models/monitor/MonitorCreator').create(sensorsConfig)
monitors.forEach( monitor => monitor.start());

module.exports = app;