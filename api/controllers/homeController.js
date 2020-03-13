'use strict';

var Model = require('../models/homeModel.js');

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