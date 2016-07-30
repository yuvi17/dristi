"use strict";

let joi = require("joi");

module.exports = app => {


    let sendEmailSchema = joi.object().keys({
        "name": joi.string().required(),
        "email": joi.string().required().email(),
        "message": joi.string().required(),
    });

    return {
        sendEmailSchema
    };
};

