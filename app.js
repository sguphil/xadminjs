let xadmin = require('./server');
let logger = require('./loginit').logger('app.js');
let dbpool = require('./db');

function start(host, port){
  let app = new xadmin(host, port);
  app.init();
  app.start();
  console.log('check=====start');
  // dbpool.query('select * from person where ?? = ?', ['number', 1]).then((data) =>{
  //   logger.debug('data=======', data);
  // })
  logger.debug('start======');
}


start('127.0.0.1', 3000);
