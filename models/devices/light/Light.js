module.exports = function(pin) {
    this.active = false;
    this.pin;

    this.execute = function(command) {
        switch (command.value) {
            case "on":
                this.on();
                break;
            case "off":
                this.off();
            default:
                console.log("Undefined Command")
                break;
        }
    }

    this.on = ()  => {
        this.active = true;
        console.log("Light on");
        
    }

    this.off = ()  => {
        this.active = false;
        console.log("Light off");
    }

    this.isOn = ()  => {
        return this.active;
    }
}