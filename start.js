require('dotenv').config();

const app = require('./app');
const server = app.listen(3000, () => console.log(`Webserver is running on port ${server.address().port}`));

//mlab Datenbank: DATABASE=mongodb://danielhauk:passbox420@ds127376.mlab.com:27376/box420
//Azure : DATABASE=mongodb://haukda60920:L2Vackm9j6HTSfpg2KqgE8TNCRrn5el6ILdoEMTtt9Qdx6LL2kmdrqDKLCqhjsiFQnFtNjDbdklzG4K5tn224w==@haukda60920.documents.azure.com:10255/?ssl=true