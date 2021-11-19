const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors')

const campaignRouter = require('./routes/index');

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/campaign', campaignRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
