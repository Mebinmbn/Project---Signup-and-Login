var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

router.get('/', function(req, res, next) {
  res.render('login', {});
});

router.post('/', authController.handleLogin);

module.exports = router;