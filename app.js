let xadmin = require('./server');
let logger = require('./loginit').logger('app.js');
let dbpool = require('./db');

function start(host, port){
  let app = new xadmin(host, port);
  app.init();
  app.start();
  logger.debug('server start, listen on port:', port);
}

process.on('SIGTERM',  () => {
  logger.info('Gracefully shutdown ...');
  process.exit(0);
});

process.on('uncaughtException', function(err) {
  logger.error(err, 'exception occuried');
  process.exit(1);
});

start('127.0.0.1', 3000);
