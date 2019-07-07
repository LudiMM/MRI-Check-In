import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import DB from './db';
import PatientRoute from './patientRoute';
import cors from 'cors';

const app = express();
const PORT = 9000;

// mongoose.connect(DB.URL, { useNewUrlParser: true }).then(
//   () => {
//     console.log('Database is connected');
//   },
//   err => {
//     console.log('Can not connect to the database' + err);
//   },
// );

var retryTime = 1;

var connectWithRetry = () => {
  return mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, err => {
    if (err) {
      retryTime *= retryTime;
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('DB connection successfull');
    }
  });
};
connectWithRetry();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/patient', PatientRoute);

app.get('/', function(req, res) {
  res.send('Server is online.');
});

app.listen(PORT, function() {
  console.log('Example app listening on port' + PORT + '!');
});
