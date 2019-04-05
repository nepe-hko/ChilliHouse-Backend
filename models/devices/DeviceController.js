module.exports = function(devices) {
    this.devices = devices

    this.action = function(command) {

        var deviceId = command.deviceId
        var onoff = command.onoff

        var d = devices.filter( device => device.id = deviceId);
        switch (onoff) {
            case "on":
                d.on();
                break;
            case "off":
                d.off()
                break;
        }
    }
}