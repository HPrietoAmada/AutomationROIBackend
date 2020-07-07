'use strict';

module.exports = function (app) {
	var model = require('../controllers/HomeController');

	app.route('/')
		.get(model.index);

	app.route('/route_name')
		.post(model.create);

	app.route('/route_name/:param1')
		.get(model.get);

	app.route('/view/:view')
		.get(model.view);
}