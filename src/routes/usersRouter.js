var express = require('express');
var router = express.Router();
let usersController=require('../controllers/usersController');
const validator = require('../middlewares/validator');
const userUpload= require('../middlewares/multer/userUpload');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',usersController.login )
router.post('/login',validator.login,usersController.loginProcess )

router.get('/register', usersController.register);
router.post('/register',userUpload.any(), usersController.store);

router.get('/profile',usersController.showProfile);

router.get('/logout', usersController.logout);


module.exports = router;
