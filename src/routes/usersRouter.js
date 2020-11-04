var express = require('express');
var router = express.Router();
let usersController=require('../controllers/usersController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',usersController.login )

module.exports = router;
