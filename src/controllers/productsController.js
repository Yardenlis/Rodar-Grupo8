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
        res.send('creando get');
         

  },

  update: function(req,res){
    const id=req.params.id;
     let product=dataAccess.getProduct(id);
       product.mcarca=req.body.marca;
       product.modelo=req.body.modelo;
       product.catgoria=req.body.categoria;
       product.rodado= req.body.rodado;
       product.peso=req.body.peso;
       product.precio=req.body.precio; 
       product.descripcion=req.body.descripcion;
       product.estado=req.body.estado;
       product.imagen= req.files[0]?req.files[0].filename:product.image;
      
       dataAccess.update(id,product);
       res.redirect('/productos/'+id+'/detail');
      
  }

} 
module.exports= productsController;