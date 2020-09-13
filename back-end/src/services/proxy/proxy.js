
const {Router} = require('express');
const config = require('config');
const request = require('request');
const https = require('https')
const axios = require('axios');
const router = Router();

router.all('/*', (req, res) => {
  if (!req.originalUrl.includes('/oauth/token')) {
    let url = config.api_v2_base_url + req.originalUrl;
    console.log('url', url);
    console.log('Authorization', req.header('Authorization'))

    let r;
    const options = {headers: {'Authorization': req.header('Authorization')}}
    console.log('Options ', options);
    console.log('Method ', req.method);
    console.log('Body ', req.body);

    if (req.method === 'POST') {
      r = request.post({uri: url, json: req.body}, options);
    } else if (req.method === 'PUT') {
      r = request.put({uri: url, json: req.body}, options);
      // r = request.put(url, { headers: {
      //     'Authorization': req.header('Authorization'),
      //     'Content-Type': 'application/json'
      //   }
      // });
      // r.write(req.body);

      // const options = {
      //   hostname: 'api.dribbble.com',
      //   port: 443,
      //   path: '/v2/shots/14142258',
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }
      // r = https.request(options)
      // r.write(JSON.stringify(req.body));
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
