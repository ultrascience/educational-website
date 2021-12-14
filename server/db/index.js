const mongoose = require('mongoose');

// User and password to mongodb connection
const connectionString = 'mongodb://user:pass@mongo:27017/minerales';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
