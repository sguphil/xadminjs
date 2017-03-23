let xadmin = require('./server');

function start(host, port){
  let app = new xadmin(host, port);
  app.init();
  app.start();
  console.log('start======');
}


start('127.0.0.1', 3000);
