/* eslint-disable no-underscore-dangle */
// import {map} from 'rxjs/operators';

/**
 * Facebook Auth.
 */
const {Router} = require('express');
const config = require('config');
const request = require('request');
const axios = require('axios');
const router = Router();

// router.post('/oauth/token', (req, res, next) => {
//   let url = `${config.api_login_base_url}${req.originalUrl}?
//      client_id=${config.client_id}
//      &client_secret=${config.client_secret}
//      &code= + ${req.params['code']}`;
//
//   const r = request.post({uri: url, json: req.body})
//   req
//     .pipe(r)
//     .pipe(res)
//     .pipe(response => {
//       console.log('response', response);
//     });
// });

router.all('/*', (req, res) => {
  if (!req.originalUrl.includes('/oauth/token')) {
    let url = config.api_v2_base_url + req.originalUrl;
    console.log('url', url);
    console.log('Authorization', req.header('Authorization'))

    let r;
    const options = {headers: {'Authorization': req.header('Authorization')}}
    console.log('Options ', options);

    if (req.method === 'POST') {
      r = request.post({uri: url, json: req.body}, options);
    } else if (req.method === 'PUT') {
      r = request.put({uri: url, json: req.body}, options);
    } else {
      r = request(url, options);
    }

    console.log('headers', r.headers);
    req
      .pipe(r)
      .pipe(res);

  } else {
    const url = `${config.api_login_base_url}${req.originalUrl}&client_id=${config.client_id}&client_secret=${config.client_secret}`;
    axios.post(url)
      .then(resp => {
        res.send(resp.data);
      })
  }

});

module.exports = router;
