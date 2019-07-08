const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://api_user:qqwwee123@ds347707.mlab.com:47707/markakod-interview-api', {
        useNewUrlParser: true,
        useCreateIndex: true,
    });

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};