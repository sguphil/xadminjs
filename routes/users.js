let express = require('express');
let router = express.Router();
let logger = require('../loginit').logger('routes.user.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  logger.debug('========into get')
  res.send('respond with a resource');
});

module.exports = router;
