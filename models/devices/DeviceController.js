module.exports =  {
    devices : [],
    init : devices => this.devices = devices,
    
    action : command => {
        var d = this.devices.find( device => device.id == command.deviceId);
        if (d != undefined) {
            d.execute(command)
        } else {
            console.log("Device with deviceId " + command.deviceId + " not found");
        }
        
    },

    getDevices : () => {
        return { 
            "devices" : this.devices
        }
    }

    
}