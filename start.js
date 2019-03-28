require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => console.log(`DB Connection Successful: ${process.env.DATABASE}`))
  .on('error', err => console.log(`DB Connection Error: ${err.message}`));

const app = require('./app');
const server = app.listen(3000, () => console.log(`Webserver is running on port ${server.address().port}`));

