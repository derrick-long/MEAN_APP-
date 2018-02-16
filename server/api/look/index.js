'use strict';

var express = require('express');
var controller = require('./look.controller');
var router = express.Router();
var auth = require('../../auth/auth.service');

router.post('/scrapeUpload',auth.isAuthenticated(), controller.scrapeUpload);

module.exports = router;
