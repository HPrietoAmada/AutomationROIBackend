'use strict';

var Model = require('../models/ROI_DTL.js');

exports.get = function (req, res) {
	Model.get(function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getByTemplateId = function (req, res) {
	Model.get(req.params.id, function (err, data) {
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
			message: 'unable to create model'
		});
	}
	Model.create (newModel, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};