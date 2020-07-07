require('dotenv').config();

const express = require('express'),
	  app     = express(),
	  bodyParser = require('body-parser'),
	  port    = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var homeRoute = require('./api/routes/HomeRoute.js');
var roiDtlRoute = require('./api/routes/RoiDtlRoute.js');
var roiHdrRoute = require('./api/routes/RoiHdrRoute.js');
var roiTemplateRoute = require('./api/routes/RoiTemplateRoute.js');

homeRoute(app);
roiHdrRoute(app);
roiDtlRoute(app);
roiTemplateRoute(app);

app.set('port', port);
app.listen(port);