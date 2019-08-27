const { Stitch, AnonymousCredential} = require('mongodb-stitch-server-sdk');

module.exports = function(client) {

    this.client = client;

    this.init = () => {

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
                this.client.callFunction("reading_findAll").then(readings => {
                    resolve(readings);
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

    this.add = reading =>  {
        var newItem = {
            "sensorId": reading.sensorId,
            "value": reading.value,
            "date": reading.date
        }

        console.log("Add Reading to DB");
        console.log(newItem);

        return new Promise((resolve, reject) => {
            this.init()
            .then( () => {
                this.client.callFunction("reading_add", [newItem]).then( () => {
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