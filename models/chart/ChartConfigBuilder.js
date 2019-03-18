const config = require('../../config.json');
const HumidityBlue = require('./styles/HumidityBlue');
const TemperatureRed = require('./styles/TemperatureRed');

exports.buildConfig = function(historyId) {

    var history = config.historys[historyId];
    var sensors = history.sensors;
    var readingsFromAllSensors = [];
    
    sensors.forEach( sensorId => {
        readingsFromAllSensors.push( Reading.find({ sensorId: sensorId }).exec());       
    });
    
    Promise.all(readingsFromAllSensors)
    .then( readingsFromAllSensors => {
        return ChartConfigBuilder.build(readingsFromAllSensors, config);
    })
    .catch( err => {
        console.log(err);
        res.send("Something went Wrong! ${err}")
    });

    

}

exports.build = (function(readingsFromAllSensors, history) {

    var dataSets = [];
    var historyName = history.name;
    
    readingsFromAllSensors.forEach( readings => {

        var renderInfo = createRenderInfo(readings[0].sensorId);
        dataSets.push(createDataset(readings, renderInfo));
    });

    return {
        type: 'line',
        data: {
            label: "DatasetTitel",
            datasets: dataSets,
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: historyName
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Zeit'
                    },
                    ticks: {
                        major: {
                            fontStyle: 'bold',
                            fontColor: '#FF0000'
                        }
                    }
                }],
                yAxes: [{
                    display: true,
                    id: 'A',
                    position: 'left',
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperatur'
                    },
                    ticks : {
                        min: 15,
                        max: 32,
                        steps: 2
                    }
                },
                {
                    display: true,
                    id: 'B',
                    position: 'right',
                    scaleLabel: {
                        display: true,
                        labelString: 'Luftfeuchte'
                    },
                    ticks : {
                        min: 25,
                        max: 85,
                        steps: 5
                    }
                }
                ]
            },
            pan: {
                enabled: true,
                mode: 'x'
            },
            zoom: {
                enabled: true,
                mode: 'x'
            }
        }
    };
    
});




function addDatasetToChart(dataset, chart) {
    chart.data.datasets.push(dataset);
    chart.update();
}

var colors

function createRenderInfo(sensorId) {
    
   //suchen was sensorId für einen historystyle hat
   var historyStyleName = config.sensors[sensorId].historyStyle;
   var sensorName = config.sensors[sensorId].name;

    if (historyStyleName == 'HumidityBlue') {
        return HumidityBlue.build(sensorName);
    }
    else if (historyStyleName == 'TemperatureRed') {
        return TemperatureRed.build(sensorName);
    }
}

function createDataset(readings, renderInfo) {

    var dataSet = [];
    readings.forEach( reading => {
        dataSet.push( { x: reading.date, y: reading.value } );
    });

    var yAxisID;
    if(readings[0].type == 'temperature') yAxisID = 'A'
    if(readings[0].type == 'humidity') yAxisID = 'B'

    return {
        yAxisID: yAxisID,
        ...renderInfo,
        data: dataSet
    }
    
    
}