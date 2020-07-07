'use strict';

module.exports = function (app) {
	var model = require('../controllers/RoiHdrController');

	app.route('/roi-hdr')
		.get(model.get)
		.post(model.create);

	app.route('/roi-hdr/:id')
		.get(model.getById);

	app.route('/roi-hdr/template-id/:id')
		.get(model.getByTemplateId);
};