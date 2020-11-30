let usersAccess = require('../helpers/usersAccess');


let usersController= {
   login: function(req,res){

      res.render('login');
  },
  register: function(req,res){

      res.render('register');
  },
  
  store:function(req,res){
     /** 
      * recibir los valores
      * crear el objeto usuario
      * persistirlo
      * */ 
 const user = {
       id:0,
      name:req.body.name,
      last_name:req.body.last_name,
      email:req.body.email,
      password:req.body.password,
   }
   
   usersAccess.setUser(user);
   res.redirect('/');

  },
  


}
module.exports=usersController;