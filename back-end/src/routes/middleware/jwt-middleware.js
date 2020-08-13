/**
 * JWT middleware
 */

const jwt = require('express-jwt');
const config = require('config');

/**
 * Is not currently been used
 * const config = require('config');
 * const jwtSecret = config.get('jwt.secret');
 */

/** JWT Options */
const options = {
  algorithms: ['HS256'],
  secret: config.get('jwt.secret'),
  requestProperty: 'jwtPayload',
};

/** JWT Token */
const jwtTokenMiddleware = jwt(options);

/** Fetch user */
function fetchUser(subject) {
  /**
   * fetch the user using the subject from the jwt
   * and return via a promise
   */
  return Promise.resolve(subject);
}

/** Fetch user */
const userMiddleware = (req, res, next) => {
  return fetchUser(req.jwtPayload.sub)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch(next);
};

/** @module jwt/route */
module.exports = [jwtTokenMiddleware, userMiddleware];
