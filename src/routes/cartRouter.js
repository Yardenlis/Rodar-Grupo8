var express = require('express');
var router = express.Router();
let cartController = require('../controllers/cartController');



/* GET home page. */
router.get('/', cartController.index);


module.exports = router;
