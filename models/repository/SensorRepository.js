const { Stitch, AnonymousCredential} = require('mongodb-stitch-server-sdk');

module.exports = function() {

    this.client;

    this.init = () => {
        this.client = Stitch.initializeDefaultAppClient('box420app-ehwav');
        return new Promise((resolve, reject) => {
            this.client.auth.loginWithCredential(new AnonymousCredential())
            .then( () => resolve())
            .catch(err => {
                reject()
                console.log(err)
            });
        });
    }

    this.findAll = () => {
        return new Promise((resolve, reject) => {
        this.init()
            .then( () => {
                this.client.callFunction("sensor_findAll").then(sensors => {
                    resolve(sensors);
                    this.client.close()
                }).catch( err => {
                    reject();
                    this.client.close()
                    console.log(err)
                });
            });
        });
    }

    this.add = sensor =>  {
        var newItem = {
            "type": sensor.type,
            "name": sensor.name,
            "pin": sensor.pin,
            "interval": sensor.interval,
        }

        return new Promise((resolve, reject) => {
            this.init()
            .then( () => {
                this.client.callFunction("sensor_add", [newItem]).then( () => {
                    resolve();
                    this.client.close()
                });
            })
            .catch( err => {
                reject();
                this.client.close()
                console.log(err)
            });
        });
    }
}