let indexController = {
    index: function(req,res){

      res.render('index')
    },
    nosotros: function(req,res){
        res.render('nosotros');



    },
    contacto: function(req,res){
        res.render('contacto');



    },
    
    

}
module.exports=indexController;