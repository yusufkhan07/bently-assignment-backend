const fs = require("fs");

function jsonLogger(req, res, next) {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;

  let log = {
    current_datetime,
    formatted_date,
    method,
    url,
    status,
  };

  // TODO: test if the logging file exist and then continue; remove log file from git.

  let logs = require("../request_logs.json") || [];
  logs.push(log);

  fs.writeFile("request_logs.json", JSON.stringify(logs), (err) => {
    if (err) {
      console.log(err);
    }
  });

  next();
}

module.exports = jsonLogger;
