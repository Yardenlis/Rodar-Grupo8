// controla lo relativo  a ABM productos
let dataAccess = require('../helpers/dataAccess');

const adminController={
  
 menu:function (req,res){
   res.render('admin');
    

 },   

adminProductList : function(req,res){
      /* pasa todos los productos para la vista de AdminLIst 
         los muestre jungo con la opcion editar
       */
    let allProducts = dataAccess.getAllProducts();
    //console.log(allProducts);
    res.render('adminProductList',{allProducts:allProducts})
    
  }
  
}
module.exports=adminController;


