

let dataAccess = require('../helpers/dataAccess');

const productsController ={

    list : function(req,res){
      
    let allProducts = dataAccess.getAllProducts();
       console.log(allProducts);
    res.render('productos',{allProducts:allProducts})
  },

  detail: function(req,res){

     res.render('detail');

  }

} 
module.exports= productsController;