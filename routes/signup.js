var express = require('express');
var router = express.Router();
const signupController = require('../controllers/userController')


router.get('/', function(req, res, next) {
  res.render('signup', { });
});

router.post('/',signupController.handleNewUser);

module.exports = router;