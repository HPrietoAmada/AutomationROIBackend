'use strict';

var connection = require('./mysql.js');

var Model = function (obj) {
	this.hdr_id = obj.hdr_id;
	this.model = obj.model;
	this.ts_no = obj.ts_no;
	this.material_type = obj.material_type;
	this.a_time_per_sheet = obj.a_time_per_sheet;
	this.d_sheet_weight = obj.d_sheet_weight;
	this.cost_per_round = obj.cost_per_round;
	this.b_perc_material_mix = obj.b_perc_material_mix;
	this.c_eq_factor_a_x_b = obj.c_eq_factor_a_x_b;
	this.e_eq_factor_d_x_b = obj.e_eq_factor_d_x_b;
	this.created_date = obj.created_date;
	this.created_by = obj.created_by;
	this.changed_date = obj.changed_date;
	this.changed_by = obj.changed_by;
};

Model.get = function (id, result) {
	connection.query(
		"SELECT * FROM roi.roi_dtl_ts where id = ? ORDER BY id",
		id
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

Model.create = function (obj, result) {
	connection.query(
		"INSERT INTO roi.roi_dtl_ts SET ?",
		obj,
		function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

module.exports = Model;