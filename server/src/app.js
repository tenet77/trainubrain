const express = require('express');
const helmet = require('helmet');

const api = require('./routers/api_v1')

const app = express();

app.use(helmet());

app.use('/v1', api);

module.exports = app;