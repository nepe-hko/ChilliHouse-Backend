exports.build = function(label) {
    return {
        label: "Luftfeuchte " + label,
        backgroundColor: 'rgba(5, 51, 255, 0.4)',

        borderColor: 'rgba(5, 51, 255, 0.75)',
        borderWidth: 0,
        fill: true,
        
        cubicInterpolationMode: 'monotone',
        pointRadius: 0
    }
}