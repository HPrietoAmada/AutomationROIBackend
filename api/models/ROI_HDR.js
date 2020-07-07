'use strict';

var connection = require('./mysql.js');

var Model = function (obj) {
	this.hdr_id = obj.hdr_id;
	this.template_id = obj.template_id;
	this.customer_name = obj.customer_name;
	this.model_1 = obj.model_1;
	this.model_2 = obj.model_2;
	this.created_date = obj.created_date;
	this.created_by = obj.created_by;
	this.changed_date = obj.changed_date;
	this.changed_by = obj.changed_by;
};

Model.getByTemplateId = function (id, result) {
	connection.query(
		"SELECT * FROM roi.roi_hdr where template_id = ? ORDER BY customer_name",
		id,
		function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

Model.getById = function (id, result) {
	connection.query(
		"SELECT * FROM roi.roi_hdr where hdr_id = ? ORDER BY customer_name",
		id,
		function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

Model.get = function (id, result) {
	connection.query(
		"SELECT * FROM roi.roi_hdr ORDER BY customer_name",
		id,
		function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};


Model.create = function (obj, result) {
	connection.query(
		"INSERT INTO table_name SET ?",
		obj,
		function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

module.exports = Model;