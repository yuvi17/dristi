"use strict";

module.exports = app => {
	let mailService = app.services.mailService;
	let validator = app.validators.mailValidator;

	function sendContactUsMail(req, res, next){
		validator.validateSendEmail(req.body).then(params => {
			return mailService.sendMail(req.body.email, req.body.message, req.body.name);
		}).then(data => {
			res.send(data);
		}).catch(err => next(err));
	};

	return {
		sendContactUsMail
	};
};

