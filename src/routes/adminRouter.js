
var express = require('express');
var router = express.Router();
let adminController=require('../controllers/adminController');

//console.log('pasando por admin router')

router.get('/',adminController.menu);
router.get('/adminProductList',adminController.adminProductList);

module.exports=router;