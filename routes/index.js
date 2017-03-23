let express = require('express');
let router = express.Router();
let logger = require('../loginit').logger('routes.index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.debug('======into get');
  res.render('index', { title: 'Express' });
});

module.exports = router;
