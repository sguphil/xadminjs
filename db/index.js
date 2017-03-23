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

const pool =createPool('127.0.0.1', 3306, 'root', 'root', 'test', 10);

// pool.query('select `name` from hobbits').then(function(rows){
//     // Logs out a list of hobbits 
//     console.log(rows);
// });

module.exports = pool;