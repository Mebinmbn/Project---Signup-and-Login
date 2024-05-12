var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

/* GET home page. */
router.get('/', function(req, res) {
  if (!req.session.authorized) return res.redirect('/login')
  res.render('index');
});

module.exports = router;
