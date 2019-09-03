const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const db = require('./Database');
const routing = require('./routes');

// view engine setup 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('div'));
app.use('/', routing);
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/build/index.html'));
// })

//error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  console.log("check error ===> ", err)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  console.log(err);
});


module.exports = app;

