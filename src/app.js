const express = require('express');
require('dotenv').config();
const router = require('./routes/rotas');
const app = express();

app.set('port', process.env.PORT || 3333);
app.use('/api', router);

module.exports = app;
