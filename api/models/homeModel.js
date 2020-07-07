'user strict';

var connection = require('./mysql.js');

var Model = function (obj) {
	this.prop = obj.prop;
};

Model.index = function (res) {
	res(null, '<h1>Amada Alert API</h1>');
};

Model.view = function (view, res) {
	res(null, '/../views/' + view);
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