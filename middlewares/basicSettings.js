"use strict";

let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let morgan = require("morgan");

module.exports = app => {

    app.set("x-powered-by", false);
    if (process.env.NODE_ENV !== "test") {
        app.use(morgan("dev"));
    }
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.set('superSecret',"hY797S2APCzSkjhgndFbsngMSd7dy");

};