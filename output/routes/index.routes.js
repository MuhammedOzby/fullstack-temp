"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express = require("express");
var IndexRouter = (0, express_1.Router)();
IndexRouter.get('/', express.static('public/index.html'));
exports.default = IndexRouter;
