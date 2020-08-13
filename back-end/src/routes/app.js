/**
 * Express server configuration
 */

const Promise = require('bluebird');
const express = require('express');
const cors = require('cors');

global.Promise = Promise;
Promise.longStackTraces();

const app = express();

app.use(express.json());

app.use(require('./middleware/logging.js'));

app.use('/*', cors(), require('../services/proxy/proxy.js'));

/**
 * These middleware set up the 404 and 500 json error responses
 * and error reporting via rollbar
 * no other routes should come after these
 */
app.use(require('./not-found'));

app.use(require('./middleware/error-handler.js'));

/** @module express/app */
module.exports = app;
