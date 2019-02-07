const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const Monitor = require('./models/Monitor');
const TemperaturSensor = require('./models/sensors/TemperaturSensor');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

module.exports = app;


myTemperaturSensor = new TemperaturSensor(15);
myMonitor = new Monitor(myTemperaturSensor);
myMonitor.start();