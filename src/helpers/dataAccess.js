// acceso funcion para acceso a datos
const fs= require('fs');
const path = require ('path');
console.log("entro a data Acces");

 const productsFilePath= path.join(__dirname,'../data/products.json');

 console.log(productsFilePath);
const dataAccess = {
    
    getAllProducts(){
        console.log("llamo a getAllproducts");
        const jsonProducts = fs.readFileSync(productsFilePath,{encoding:'utf-8'});
        return JSON.parse(jsonProducts);           

    },
    setAllProducts(allProducts){
     const allProductsJson= JSON.stringify(allProducts,null,"");
     fs.writeFileSync(productsFilePath,allProductsJson);


    },


    getProduct(id){
    this.getAllProducts().map((product)=>{
         return id==product.id ?product:null;

    });
    },
    setProduct(producto){
        return false;

     },
   
    }
    module.exports = dataAccess;

