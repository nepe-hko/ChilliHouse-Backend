module.exports = function() {
    this.devices
    this.init = devices => this.devices = devices;
    this.action = command => {
        var d = this.devices.find( device => device.id == command.deviceId);
        if (d != undefined) {
            d.execute(command)
        } else {
            console.log("Device with deviceId " + command.deviceId + " not found");
        }
        
    }

    
}