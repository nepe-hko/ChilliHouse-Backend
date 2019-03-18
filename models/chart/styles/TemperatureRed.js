exports.build = function(label) {
    return {
        label: label + "temperatur",

        backgroundColor: 'rgba(255, 5, 5, 0.4)',
        borderColor: 'rgba(255, 5, 5, 0.75)',
        borderWidth: 0,
        fill: true,
        
        cubicInterpolationMode: 'monotone',
        pointRadius: 0
    }
}