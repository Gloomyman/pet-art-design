
const Promise = require('bluebird');
const express = require('express');
const cors = require('cors');

global.Promise = Promise;
Promise.longStackTraces();

const app = express();

app.use(express.json());

app.use(require('./middleware/logging.js'));

app.use('/*', cors(), require('../services/proxy/proxy.js'));

app.use(require('./not-found'));

app.use(require('./middleware/error-handler.js'));

module.exports = app;
