// Mongoose
var mongoose = require('mongoose');


// This function connect the procces with the db 
function connect() {
    if (this.connection) return this.connection;
    mongoose.connect('mongodb://localhost/challenge_uns', { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
        if (err) {
            console.log("error conecting database");
            process.exit(0);
        }

        console.log('Database successfully connected');
        this.connection = db;
    });
}

module.exports = {
    connect: connect
}
