"use strict";

let express = require("express");
let consign = require("consign");
let logger = require("winston");
let mailer = require("nodemailer");
let path = require('path');
let app = express();
let appPort = process.env.AB_APP_PORT || "9191";

consign()
    .include("./helpers")
    .then("./middlewares/basicSettings.js")
    .then("./config")
    .then("./validators/schemas")
    .then("./validators")
    .then("./middlewares/staticResources.js")
    .then("./services")
    .then("./controllers")
    .then("./routes")
    .then("./middlewares/mainRoutes.js")
    .then("./middlewares/errorHandler.js")
    .into(app);

if (process.env.NODE_ENV !== "test") {
    app.listen(appPort, () => {
        logger.info(`Server started on port ${appPort}`);
    });
}

module.exports = app;