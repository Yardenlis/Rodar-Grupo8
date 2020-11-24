var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/',productsController.list);


router.get('/:id/detail',productsController.detail);

module.exports = router;