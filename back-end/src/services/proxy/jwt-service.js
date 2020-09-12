
const jwt = require('jsonwebtoken');
const config = require('config');

const jwtSecret = config.get('jwt.secret');

function generateLoginTokenFromUserId(user) {
    return jwt.sign(user, jwtSecret, {expiresIn: '1y'});
}

/**
 * Serialise user data
 * @return {token} token value.
 */
function serializeProfilerData(profilerData) {
    return jwt.sign(profilerData, jwtSecret, {expiresIn: '5m'});
}

/**
 * Deserialise user data
 * @return decodedToken token value.
 */
function deserializeProfilerData(token) {
    return jwt.verify(token, config.get('jwt.secret'), (err, decodedToken) => {
        if (err || !decodedToken) {
            return err;
        }

        return decodedToken;
    });
}


module.exports = {
    deserializeProfilerData,
    serializeProfilerData,
};
