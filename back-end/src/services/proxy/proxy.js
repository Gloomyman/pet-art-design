/* eslint-disable no-underscore-dangle */
/**
 * Facebook Auth.
 */
const {Router} = require('express');
const config = require('config');
const request = require('request');
const router = Router();

router.get('/', (req, res, next) => {
  console.log(req);
  console.log('api_base_url', config.api_base_url);

  let url = config.api_base_url + req.originalUrl;
  console.log('url', url);

  let r = null;
  if (req.method === 'POST') {
    r = request.post({uri: url, json: req.body});
  } else if (req.method === 'PUT') {
    r = request.put({uri: url, json: req.body});
  } else {
    r = request(url);
  }

  console.log('headers', r.headers);

  req.pipe(r).pipe(res);

  console.log(res.statusCode);

});

module.exports = router;
