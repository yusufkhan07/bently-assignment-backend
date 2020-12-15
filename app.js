var express = require("express");
var app = express();
var logger = require("morgan");

app.use(logger("dev"));

app.get("/", function (req, res) {
  res.send("Hello world 2!");
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    error: err.message,
  });
});

module.exports = app;
