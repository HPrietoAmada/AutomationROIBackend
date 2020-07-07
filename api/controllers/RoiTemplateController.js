'use strict';

var Model = require('../models/ROI_TEMPLATE.js');

exports.get = function (req, res) {
	Model.get(function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getById = function (req, res) {
	Model.get(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};