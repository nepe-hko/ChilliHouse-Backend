module.exports = function(devices) {
    this.devices = devices

    this.action = function(command) {
        var d = devices.find( device => device.id == command.deviceId);
        d.execute(command);
    }
}