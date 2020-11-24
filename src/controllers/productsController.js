

let dataAccess = require('../helpers/dataAccess');

const productsController ={

    list : function(req,res){
      
    const allProducts = dataAccess.getAllProducts();
    console.log(allProducts);
    res.render('productos',{

     allproducts:allProduct

    })
  },

  detail: function(req,res){

     res.render('detail');

  }

} 
module.exports= productsController;