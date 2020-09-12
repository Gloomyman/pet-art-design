
const config = require('config');
const app = require('./routes/app');
const log = require('./logging.js')('server');

try {
  const port = config.get('port') || 5000;

  log.info('starting server', port, process.env.NODE_ENV, config.util.getEnv());

  module.exports = app.listen(port);

} catch (err) {
  log.info(err);
}


