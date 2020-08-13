/**
 * Express Routes
 */
const {Router} = require('express');

const router = Router();

/**
 * Is not currently been used
 * const { version } = require('../../package.json');
 */

// /** Route for auth tokens */
// router.get('/', (req, res) => {
//   const token = req.headers['X-ACCESS-TOKEN'];
//   if (!token) {
//     return res.status(401).send({ auth: false, message: 'NO_TOKEN_PROVIDED' });
//   }
//
//   /** This need to be look at */
//   return token;
// });

/** Route for facebook auth */
router.use('/*', require('../../../services/proxy/proxy.js'));

/** @module token/route */
module.exports = router;
