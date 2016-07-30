"use strict";

let router = require("express").Router();

module.exports = app => {
	var mailController = app.controllers.mailController;

	router.route("/contact").post((req, res, next) => {
		return mailController.sendContactUsMail(req, res, next);
	});
	

	return router;
}