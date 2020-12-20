var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');
const productUpload=require('../middlewares/multer/prductUpload');

/* GET users listing. */
router.get('/',productsController.list);


router.get('/:id/detail',productsController.detail);

router.get('/:id/edit',productsController.edit);
router.post('/:id/edit',productUpload.any(),productsController.update);


router.get('/create',productsController.create);
module.exports = router;