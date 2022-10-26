"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var app_functs_1 = require("./lib/app.functs");
var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var index_routes_1 = require("./routes/index.routes");
var cors = require("cors");
console.log('Server starting.');
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false,
}));
app.use('/', index_routes_1.default);
app.use(function (_req, res) { return res.redirect('/'); });
console.log('Data Source has been initialized!');
var port = process.env.PORT || '3000';
app.set('port', port);
var server = (0, http_1.createServer)(app);
server.listen(port);
server.on('error', function (error) { return (0, app_functs_1.httpServerErrorHandling)(error, port); });
server.on('listening', function () { return (0, app_functs_1.onListening)(server, port); });
