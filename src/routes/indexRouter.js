var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');


/* GET home page. */
router.get('/', indexController.index);
router.get('/nosotros', indexController.nosotros);
router.get('/contacto', indexController.contacto);

module.exports = router;
