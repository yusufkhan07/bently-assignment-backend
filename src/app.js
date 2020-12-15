const express = require("express");
const app = express();
const logger = require("morgan");
const MaxAndSecondMax = require("./max-second-max");

app.use(logger("dev"));

app.post("/", function (req, res) {
  const maxAndSecondMax = MaxAndSecondMax([1, 23, 3, "45"]);

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
