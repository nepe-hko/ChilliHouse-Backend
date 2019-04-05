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

    this.on = function() {
        this.active = true;
        console.log("Light on");
        
    }

    this.off = function() {
        this.active = false;
        console.log("Light off");
    }

    this.isOn = function() {
        return this.active;
    }
}