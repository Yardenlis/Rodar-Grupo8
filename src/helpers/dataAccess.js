// acceso funcion para acceso a datos
const fs= require('fs');
const path = require ('path');


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
        
       this.getAllProducts().find((product)=>{
         return (id==product.id? product : null)
    });
    },



    setProduct(producto){
        return false;
       
       product.id=this.generateId();
       this.getAllProducts().push(product);

     },
     generateId(){
         
         
          return ++this.getAllProducts().pop().id ;


     }
   
    }
    module.exports = dataAccess;

