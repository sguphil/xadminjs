let dbconfig = require('../config/serverconfig.json');
let mysql = require('promise-mysql');
function createPool(_host, _port, _user, _password, _database, _connectionLimit) {
    return mysql.createPool({
        host: _host,
        port: _port,
        user: _user,
        password: _password,
        database: _database,
        connectionLimit: _connectionLimit
    });
}


const pool = createPool(dbconfig.mysql_host, dbconfig.mysql_port, dbconfig.mysql_user,
    dbconfig.mysql_password, dbconfig.mysql_database, dbconfig.mysql_connectionLimit);

// pool.query('select `name` from hobbits').then(function(rows){
//     // Logs out a list of hobbits 
//     console.log(rows);
// });

module.exports = pool;