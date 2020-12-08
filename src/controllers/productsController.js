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

  },

  edit: function(req,res){
    const id=req.params.id;
    product =dataAccess.getProduct(id);
       res.render('edit-product', {product:product});

  },

  create: function(req,res){

         

  },

  store: function(req,res){
    const id=req.params.id;
      //paso el id y el body
    dataAccess.update(id,req.body);
      /* req.params.id,
       req.body.marca,
       req.body.modelo,
       req.body.categoria,
       req.body.rodado,
       req.body.peso,
       req.body.precio, 
       req.body.descripcion,
       req.body.estado);*/
       res.redirect('/productos/'+id+'/detail');
      
  }

} 
module.exports= productsController;