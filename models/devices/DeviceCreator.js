const Light = require('../devices/light/Light');


exports.create = function(deviceConfig) {
    
    var devices = [];
    
    sensorsConfig.forEach( deviceConfig => {

        switch (deviceConfig.type) {

            case "light":
                devices.push(new Light(deviceConfig));
                break;

            case "humidifyer":
                devices.push(new Light(deviceConfig));
                break;
        }
    });
    return devices;
}
