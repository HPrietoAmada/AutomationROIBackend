'use strict';

module.exports = function (app) {
	var model = require('../controllers/RoiTemplateController');

	app.route('/roi-template')
		.get(model.get);

	app.route('/roi-template/:id')
		.get(model.getById);
};