let log4js = require("log4js");
let log4js_config = require("./config/logconfig.json");
log4js.configure(log4js_config);
console.log("log_start start!");

// {
//   "appenders": [
//   {"type": "console", "category": "console"},
//   {
//     "type": "dateFile",
//     "filename": "/root/xadmin/logs/",
//     "pattern": "debug/yyyyMMddhh.txt",
//     "absolute": true,
//     "alwaysIncludePattern": true,
//     "category": "logInfo"
//   } ],
//   "levels":{ "logInfo": "DEBUG"}
// }

function createLogger(filename) {
  return log4js.getLogger(filename);
}

exports.logger = createLogger;