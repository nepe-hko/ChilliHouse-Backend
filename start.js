require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => console.log(`DB Connection Successful: ${process.env.DATABASE}`))
  .on('error', err => console.log(`DB Connection Error: ${err.message}`));

const app = require('./app');
const server = app.listen(3000, () => console.log(`Webserver is running on port ${server.address().port}`));

//mlab Datenbank: DATABASE=mongodb://danielhauk:passbox420@ds127376.mlab.com:27376/box420
//Azure : DATABASE=mongodb://haukda60920:L2Vackm9j6HTSfpg2KqgE8TNCRrn5el6ILdoEMTtt9Qdx6LL2kmdrqDKLCqhjsiFQnFtNjDbdklzG4K5tn224w==@haukda60920.documents.azure.com:10255/?ssl=true