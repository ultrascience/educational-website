// server.js
import bodyParser from 'body-parser';
import express from 'express';
import router from '././routes';
import rockRouter from '././routes/rock.routes';
import './config/mongodb.config';

const app = express();
const PORT = 8080;
var cors = require('cors');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// use cors to allow cross origin resource sharing
app.use(cors());

app.use('/api', router);
app.use('/api/rocks', rockRouter);

app.get('/', function(req, res){
  res.send('Hello ! from the Server ');
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

export default app;
