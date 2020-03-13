'user strict';

var connection = require('./mysql.js');

var Model = function (obj) {
	this.prop = obj.prop;
};

Model.index = function (res) {
	res(null, '<h1>Template API Home</h1>');
};

Model.get = function (id, result) {
	connection.query(
		"SELECT * FROM table_name where id = ? ORDER BY id",
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
		"INSERT INTO table_name SET ?"
		,obj
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

module.exports = Model;