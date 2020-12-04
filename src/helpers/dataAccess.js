

// acceso funcion para acceso a datos
const fs= require('fs');
const path = require ('path');
const { all } = require('../routes/productsRouter');


 const productsFilePath= path.join(__dirname,'../data/products.json');

const dataAccess = {
    
    getAllProducts(){
        
        const jsonProducts = fs.readFileSync(productsFilePath,{encoding:'utf-8'});
        return JSON.parse(jsonProducts);           

    },
    setAllProducts(allProducts){
     const allProductsJson= JSON.stringify(allProducts,null,"");
     fs.writeFileSync(productsFilePath,allProductsJson);


    },


    getProduct(id){

       encontrado = this.getAllProducts().find((product)=>{
         return (id==product.id?product : null);
    });
    return encontrado;
    },



    setProduct(producto){
      
       
       product.id=this.generateId();
       return this.getAllProducts().push(product);

     },
     generateId(){
         
         
          return ++this.getAllProducts().pop().id ;


     },

    update(id,data){
       allProducts=this.getAllProducts();
       //console.log(allProducts);
       updatedProducts=allProducts.map((product)=>{
         if(product.id==id){
            product=data;
            product.id=id;            

         }
         return product;

      });
      
       this.setAllProducts(updatedProducts);
    }
      

      
      //console.log(data.marca);

    
   
    }
    module.exports = dataAccess;

