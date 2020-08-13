/**
 * Create Logger for the app
 */

const bunyan = require('bunyan');
const config = require('config');

const logLevels = config.get('log');
const defaultLogLevel = config.get('defaultLogLevel');

/** Database check if db is available */
/** @module create/logger */
module.exports = function createLogger(name) {
  const level = logLevels[name] || defaultLogLevel;

  return bunyan.createLogger({
    name,
    level,
    serializers: bunyan.stdSerializers,
  });
};
