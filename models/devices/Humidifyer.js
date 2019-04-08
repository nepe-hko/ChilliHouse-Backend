module.exports = function(deviceConfig) {
    this.active = false;
    this.name = deviceConfig.name;
    this.id = deviceConfig.id;
    this.pin = deviceConfig.pin

    this.execute = function(command) {
        switch (command.value) {
            case "on":
                this.on();
                break;
            case "off":
                this.off();
                break;
            default:
                console.log("Undefined Command")
                break;
        }
    }

    this.on = ()  => {
        this.active = true;
        console.log("Humidifyer on");
    }

    this.off = ()  => {
        this.active = false;
        console.log("Humidifyer off");
    }

    this.isOn = ()  => { return this.active }
}