"use strict";

let mailer = require("nodemailer");

module.exports = app => {
	let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let transporter = mailer.createTransport('smtps://kumaryuvraj118%40gmail.com:yashuvashu@smtp.gmail.com');
    let defaultSender = app.config.env.mailSender;
    let defaultRec = app.config.env.mailRec;

    function sendMail(email, body, name){
    	let mailOptions = {
    		from : "Reminder Service",
    		to : email,
    		replyTo : email,
    		subject : "Reminder for Event for " + name,
    		text : body
    	};

    	return transporter.sendMail(mailOptions);
    }
	return {
		sendMail
	}
}