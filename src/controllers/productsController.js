let dataAccess = require('../helpers/dataAccess');

const productsController ={

    list : function(req,res){
      
    let allProducts = dataAccess.getAllProducts();
      // console.log(allProducts);
    res.render('productos',{allProducts:allProducts})
  },

  detail: function(req,res){
    const id=req.params.id;
    product =dataAccess.getProduct(id);
    
      console.log(product);
    
   res.render('detail',{product:product});

  }



} 
module.exports= productsController;