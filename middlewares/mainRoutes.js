"use strict";

let path = require("path");

module.exports = app => {
    app.use("/mail", app.routes.mail);

    app.get("/", function(req, res){
    	res.sendFile(path.join(__dirname, '../public', 'index.html'));
    })
};