var express = require('express');
var router = express.Router();
var logoutC = require('../controllers/logOutController')

//get logout
router.get('/', logoutC.logoutController);

module.exports = router;
