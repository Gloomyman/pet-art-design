
const bunyan = require('bunyan');
const config = require('config');

const logLevels = config.get('log');
const defaultLogLevel = config.get('defaultLogLevel');

module.exports = function createLogger(name) {
  const level = logLevels[name] || defaultLogLevel;

  return bunyan.createLogger({
    name,
    level,
    serializers: bunyan.stdSerializers,
  });
};
