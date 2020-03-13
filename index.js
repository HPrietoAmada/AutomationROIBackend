require('dotenv').config();

const express = require('express'),
	  app     = express(),
	  bodyParser = require('body-parser'),
	  port    = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var route = require('./api/routes/route.js');
route(app);

app.set('port', port);
app.listen(port);