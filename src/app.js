/**
 *   Doughnut Store - Application Dependencies
 */
const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.set('port', process.env.APP_PORT);
app.use(routes);

module.exports = app;