import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// mongoose options
const options = {
};

// mongodb environment variables
const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT
} = process.env;

     // ccLOCAL_DB_URL': `mongodb://mongo:27017/minerales?authSource=admin`,
const dbConnectionURL = {
     'LOCAL_DB_URL': `mongodb://mongo:27017/minerales`,
};
mongoose.connect(dbConnectionURL.LOCAL_DB_URL, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL));
db.once('open', () => {
     // we're connected !
     console.log('Mongodb Connection Successful');
});

export default db;
