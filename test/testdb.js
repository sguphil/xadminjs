let should = require('should');
let xadmin = require('../server');
let logger = require('../loginit').logger('app.js');
let dbpool = require('../db');



describe('#testdb', function () {

    it('should found record', function (done) {
        dbpool.query('select * from person where ?? = ?', ['number', 1]).then((data) => {
            logger.debug('data=======', data);
            should.exists(data);
            should.equal(data[0].number, 1);
            done();
        })
    });
});

// function start(host, port){
//   let app = new xadmin(host, port);
//   app.init();
//   app.start();
//   console.log('check=====start');
//   dbpool.query('select * from person where ?? = ?', ['number', 1]).then((data) =>{
//     logger.debug('data=======', data);
//   })
//   logger.debug('start======');
// }


// start('127.0.0.1', 3000);
