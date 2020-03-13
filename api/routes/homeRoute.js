'use strict';

module.exports = function (app) {
	var model = require('../controllers/homeController');

	app.route('/')
		.get(home.index);

	app.route('/route_name')
		.post(model.create);

	app.route('/route_name/:param1')
		.get(model.get);
;
}