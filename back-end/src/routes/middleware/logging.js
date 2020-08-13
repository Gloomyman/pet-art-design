/**
 * Logging middleware
 */

const log = require('../../logging.js')('server');

/** @module server/logger */
module.exports = (req, res, next) => {
  const requestLogger = () => {
    log.debug('request', {
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
    });
  };
  res.on('finish', requestLogger);
  next();
};
