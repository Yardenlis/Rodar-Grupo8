let usersAccess = require('../helpers/usersAccess');
const { validationResult } = require('express-validator');
const bcrypt=require('bcrypt')


let usersController= {
   login: function(req,res){

      res.render('login-form');
  },

   loginProcess: function(req,res){
        const errors=validationResult(req);
        if(!errors.isEmpty()){
           return res.render('login-form',{errors: errors.errors})
          }
          const allUsers = usersAccess.getAllUsers();
          console.log(allUsers);
          const userFound = allUsers.find(user => req.body.email==user.email);
          req.session.userLog=userFound;
          res.redirect('/');

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
     pwdHashed= bcrypt.hashSync(req.body.password, 10);
     //console.log('clave qeu se guarda', pwdHashed);
 const user = {
       id:0,
      name:req.body.name,
      last_name:req.body.last_name,
      email:req.body.email,
      password:pwdHashed,
      profile:0,
      avatar:req.files[0].filename
   }
   
   usersAccess.setUser(user);
   res.redirect('/');

  },

  showProfile:function(req,res){

        res.render('userProfile');

  }

 


}
module.exports=usersController;