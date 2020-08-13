/**
 * Error handler middleware
 */

const {UnauthorizedError} = require('express-jwt');
const log = require('../../logging.js')('server');

/** @module error/handler */
module.exports = (err, req, res, next) => {
  res.error = err;

  if (res.headersSent) {
    log.error({err, req, res});
    return next(err);
  }

  if (err instanceof UnauthorizedError) {
    log.debug('unauthorized', {err});
    return res.status(401).json({message: 'Unauthorized'});
  }

  res.status(500).json({message: 'Internal Server Error'});

  return log.error({err, req, res});
};
