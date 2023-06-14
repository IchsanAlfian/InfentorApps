require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var maQuestionRouter = require('./routes/maquestion');
var resultAnswerMaRouter = require('./routes/resultAnswerMa');
var essayQuestionRouter = require('./routes/essayQuestion');
var jobRouter = require('./routes/job')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/maQuestion', maQuestionRouter);
app.use('/resultAnswerMa', resultAnswerMaRouter);
app.use('/essayQuestion', essayQuestionRouter);
app.use('/job', jobRouter);

module.exports = app;
