// can use this but, just loading it through docker-compose for now. Keeping it for later
// require('dotenv').config({ path: 'config.env' });

// check the database connection
var mongoose = require('mongoose');
// username:password@host:port/database
mongoose.connect(process.env.DATABASE_CONNECTION);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
    console.log(`An error occured trying to connect to the database: ${error.message}`);
});


// Start our app!
const app = require('./app');
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});