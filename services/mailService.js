"use strict";

let mailer = require("nodemailer");

module.exports = app => {
	let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let transporter = mailer.createTransport('smtps://kumaryuvraj118%40gmail.com:yashuvashu@smtp.gmail.com');
    let defaultSender = app.config.env.mailSender;
    let defaultRec = app.config.env.mailRec;

    function sendMail(email, body, name){
    	let subject = "Website Contact Us Form by " + name;
    	let mailOptions = {
    		from : defaultSender,
    		to : defaultRec,
    		replyTo : email,
    		subject : subject,
    		text : body
    	};

    	return transporter.sendMail(mailOptions);
    }
	return {
		sendMail
	}
}