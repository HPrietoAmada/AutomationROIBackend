
'user strict';

var connection = require('./mysql.js');

var ROI_TEMPLATE = function (obj) {
	this.template_id = obj.template_id;
	this.template_name = obj.template_name;
	this.table_name = obj.table_name;
	this.column_name = obj.column_name;
	this.label = obj.label;
	this.input_type = obj.input_type;
	this.value_type = obj.value_type;
	this.value_count = obj.value_count;
	this.sort_order = obj.sort_order;
	this.status = obj.status;
	this.created_date = obj.created_date;
	this.created_by = obj.created_by;
	this.changed_date = obj.changed_date;
	this.changed_by = obj.changed_by;
}

ROI_TEMPLATE.getById = function (id, result) {
	connection.query(
		"SELECT * FROM roi.roi_template WHERE template_id = ? ORDER BY template_name",
		id,
		function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		}
	);
}

ROI_TEMPLATE.get = function (result) {
	connection.query(
		"SELECT * FROM roi.roi_template ORDER BY template_name",
		function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		}
	);
}

module.exports = ROI_TEMPLATE;


/*

+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| template_id   | smallint(6) | YES  |     | NULL    |       |
| template_name | varchar(30) | YES  |     | NULL    |       |
| table_name    | varchar(30) | YES  |     | NULL    |       |
| column_name   | varchar(50) | YES  |     | NULL    |       |
| label         | varchar(50) | YES  |     | NULL    |       |
| input_type    | varchar(50) | YES  |     | NULL    |       |
| value_type    | varchar(50) | YES  |     | NULL    |       |
| value_count   | tinyint(4)  | YES  |     | NULL    |       |
| sort_order    | tinyint(4)  | YES  |     | NULL    |       |
| status        | tinyint(4)  | YES  |     | NULL    |       |
| created_date  | datetime    | YES  |     | NULL    |       |
| created_by    | varchar(32) | YES  |     | NULL    |       |
| changed_date  | datetime    | YES  |     | NULL    |       |
| changed_by    | varchar(32) | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+

*/