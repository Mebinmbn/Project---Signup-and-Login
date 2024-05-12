var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

//get the login page
router.get('/', function(req, res, next) {
  if (req.session?.authorized) return res.redirect('/')
    res.render('login')
});

//login post
router.post('/', authController.handleLogin);

module.exports = router;