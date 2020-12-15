const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");

const MaxAndSecondMax = require("./max-second-max");

// log in console
app.use(logger("dev"));

// parse application/json
app.use(bodyParser.json());

app.post("/", function (req, res) {
  const maxAndSecondMax = MaxAndSecondMax(req.body);

  res.send({
    max: maxAndSecondMax.max,
    secondMax: maxAndSecondMax.secondMax,
  });
});

app.all("*", function (req, res) {
  res.status(404);
  res.send({
    status: 404,
    message: "Not Found",
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message,
  });
});

module.exports = app;
