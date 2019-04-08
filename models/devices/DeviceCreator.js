const Light = require('./Light');
const Humidifyer = require('./Humidifyer');
const Dehumidifyer = require('./Dehumidifyer');

exports.create = devicesConfig => {
    
    var devices = [];
    
    devicesConfig.forEach( deviceConfig => {

        switch (deviceConfig.type) {

            case "light":
                devices.push(new Light(deviceConfig));
                break;

            case "humidifyer":
                devices.push(new Humidifyer(deviceConfig));
                break;

            case "dehumidifyer":
                devices.push(new Dehumidifyer(deviceConfig));
                break;
            
            default:
                console.log(deviceConfig.type + " is not implemented yet"); 
                break;
        }
    });
    return devices;
}
