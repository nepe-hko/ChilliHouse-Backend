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

    History.remove();
    historys.forEach( history => {

        var sensorsInHistory = [];
        history.sensors.forEach( sensorId => {
            sensorsInHistory.push(Sensor.findOne({id: sensorId}).exec());
            
        });

        
        Promise.all(sensorsInHistory).then( sensorsInHistory => {            
            var h = new History({
                id: history.id,
                name: history.name
            });
            sensorsInHistory.forEach( sensor => h.sensors.push(sensor._id));
            h.save();
        })
        .catch( err => console.log("fehlesr"));
        

    });

}




module.exports = app;