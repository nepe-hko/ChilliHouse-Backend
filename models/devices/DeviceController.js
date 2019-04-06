global.DEVICES = []
module.exports =  {
    init : devices => DEVICES = devices,
    
    action : command => {
        var d = DEVICES.find( device => device.id == command.deviceId);
        if (d != undefined) {
            d.execute(command)
        } else {
            console.log("Device with deviceId " + command.deviceId + " not found");
        }
        
    }

    
}