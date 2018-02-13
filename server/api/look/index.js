'use strict';

var express = require('express');
var controller = require('./look.controller');
var router = express.Router();
var auth = require('../../auth/auth.service');

module.exports = router;
