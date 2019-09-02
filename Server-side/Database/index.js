const mongoose = require('mongoose');
mongoose.connect('mongodb://todo:tal123@ds215338.mlab.com:15338/todo-list');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', () => {
    console.log('mongoose connection error');
});

db.once('open', () => {
    console.log('mongoose connected successfully');
});


module.exports = db;