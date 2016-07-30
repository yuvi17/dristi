"use strict";

let joi = require("joi");

module.exports = app => {
    let schemas = app.validators.schemas.mailerSchema;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    function validateSendEmail (params) {
    	console.log(params)
        logger.info(` Validating Request ${JSON.stringify(params)}`);

        let joiValidationOption = {
            abortEarly: false,
            allowUnknown: true
        };

        return new Promise((resolve, reject) => {
            joi.validate(params, schemas.sendEmailSchema, joiValidationOption, err => {
                if (err) {
                    let error = errorFormatter.createErrorObjectFromJoiErrors(err);
                    logger.error(`Validation failed : ${JSON.stringify(error.bodyParams)}`);
                    return reject(error);
                }
                logger.info(` Validation successful ${JSON.stringify(params)}`);
                return resolve(params);
            });
        });
    }

    return {
    	validateSendEmail
    }
}

