let express = require('express');
let router = express.Router();
let logger = require('../loginit').logger('routes.login.js');

/* GET home page. */
router.post('/login', function(req, res, next) {
  logger.debug('======into post login' + req.body);
  res.end('login success');
});

module.exports = router;
