'use strict';

var connection = require('./mysql.js');

var Model = function (obj) {
	this.hdr_id = obj.hdr_id;
	this.model = obj.model;
	this.m1_price = obj.m1_price;
	this.m2_price = obj.m2_price;
	this.total_sales_price = obj.total_sales_price;
	this.percent_down_payment = obj.percent_down_payment;
	this.total_finance_price = obj.total_finance_price;
	this.avg_time_per_sheet = obj.avg_time_per_sheet;
	this.proc_charge_per_hr = obj.proc_charge_per_hr;
	this.hrs_per_day = obj.hrs_per_day;
	this.days_per_week = obj.days_per_week;
	this.operator_per_shift = obj.operator_per_shift;
	this.no_material_handler = obj.no_material_handler;
	this.cost_per_hr_operator = obj.cost_per_hr_operator;
	this.cost_per_hr_handler = obj.cost_per_hr_handler;
	this.cost_per_hr_mach_op = obj.cost_per_hr_mach_op;
	this.util_rate_of_machine = obj.util_rate_of_machine;
	this.util_rate_of_sheet = obj.util_rate_of_sheet;
	this.mach_productivity_rate = obj.mach_productivity_rate;
	this.interest_rate = obj.interest_rate;
	this.no_payment_per_year = obj.no_payment_per_year;
	this.no_months_in_loan = obj.no_months_in_loan;
	this.monthly_payment = obj.monthly_payment;
	this.total_loan_interest = obj.total_loan_interest;
	this.created_date = obj.created_date;
	this.created_by = obj.created_by;
	this.changed_date = obj.changed_date;
	this.changed_by = obj.changed_by;
};

Model.get = function(result) {
	connection.query(
		"SELECT * FROM roi.roi_dtl",
		function (err, res) {
			if (err)
				result(err, null);
			result(null, res);
		}
	);
};

Model.getByTemplateId = function(id, result) {
	connection.query(
		"SELECT * FROM roi.roi_dtl WHERE hdr_id = ?",
		id,
		function (err, res) {
			if (err)
				result(err, null);
			result(null, res);
		}
	);
};

Model.create = function (obj, result) {
	connection.query(
		"INSERT INTO roi.roi_dtl SET ?",
		obj,
		function (err, res) {
			if (err)
				result(err, null);
			result(null, res);
		}
	);
};

module.exports = Model;