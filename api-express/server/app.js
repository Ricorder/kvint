const fs = require('fs');
const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const { createErr, cathErrAndSendAnswer } = require('./middleware/checkErrors');

const apiRouterCall = require('./routes/apiRouterCall');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('common', { stream: fs.createWriteStream('./access.log', { flags: 'a' }) }));

app.use('/api/v1/call', apiRouterCall);

app.use(createErr, cathErrAndSendAnswer);

module.exports = app;
