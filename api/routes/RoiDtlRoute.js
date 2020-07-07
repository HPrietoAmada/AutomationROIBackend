'use strict';

module.exports = function (app) {
	var model = require('../controllers/RoiDtlController');

	app.route('/roi-dtl')
		.get(model.get)
		.post(model.create);
};