var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/',productsController.list);


router.get('/:id/detail',productsController.detail);

router.get('/:id/edit',productsController.edit);
router.post('/:id/edit',productsController.store);

module.exports = router;