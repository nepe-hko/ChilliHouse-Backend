module.exports = function(pin) {
    this.active = false;
    this.pin;

    this.on = function() {
        this.active = true;
        console.log("Light on");
        
    }

    this.off = function() {
        this.active = false;
        console.log("Light off");
    }
}