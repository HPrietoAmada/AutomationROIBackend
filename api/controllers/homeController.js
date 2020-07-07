'use strict';

var Model = require('../models/homeModel.js');

exports.index = function (req, res) {
	Home.index(function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.view = function (req, res) {
	Home.form(req.params.view, function (err, data) {
		if (err)
			res.send(err);
		console.log("View: " + data);
		res.sendFile(path.join(__dirname + data));
	});
};

exports.get = function (req, res) {
	Model.get(req.params.param1, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.create = function (req, res) {
	var newModel = new Model(req.body);
	delete newModel.id;

	if (!newModel) {
		res.status(400).send({
			error: true,
			message: 'Unable to create'
		});
	}
	Model.create (newModel, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};