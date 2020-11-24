var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('productos');
});

router.get('/:id/detail',productsController.detail);

module.exports = router;