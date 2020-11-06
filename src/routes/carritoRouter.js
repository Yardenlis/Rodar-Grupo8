var express = require('express');
var router = express.Router();
let carritoController = require('../controllers/carritoController');


/* GET home page. */
router.get('/', carritoController.index);


module.exports = router;
