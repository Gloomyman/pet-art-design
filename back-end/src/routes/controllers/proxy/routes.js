
const {Router} = require('express');

const router = Router();

router.use('/*', require('../../../services/proxy/proxy.js'));

module.exports = router;
