exports.build = (function(readingsFromAllSensors, config) {

    var dataSets = [];
    
    readingsFromAllSensors.forEach( readings => {
        
        dataSets.push(createDataset(readings, colors));
    })

    console.log(readingsFromAllSensors.length)

    return {
        type: 'line',
        data: {
            label: "DatasetTitel",
            datasets: dataSets,
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'HistoryTitel'
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
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
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperatur'
                    }
                }]
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

function createDataset(readings, colors) {

    var data = [];
    readings.forEach( reading => {
        data.push(
            { x: reading.date, y: reading.value }
        );
    });
    
    var dataInfo = {
        data: data,
    }
    
    var renderInfo = {
        label: "label",
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 0,
        fill: true,
        
        cubicInterpolationMode: 'monotone',
        pointRadius: 4
    
    }
    
    return {
        ...dataInfo,
        ...renderInfo
    }
    
}