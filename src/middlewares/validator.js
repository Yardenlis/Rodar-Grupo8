const { body } = require('express-validator'); // en objeto body van a estar todos los campos del formulario para ser validados
const usersAccess = require('../helpers/usersAccess');
const bcrypt = require('bcrypt');

module.exports={


    login:[body('mail')

           .notEmpty().withMessage('El mail es obligatorio')
           .bail()
           .isEmail().withMessage('Formato incorreco')
           .bail()
           // value es el valor del campo que estoy analizando. 
           .custom((value,{req})=>{
               console.log('busco el usuario');
               const allUsers = usersAccess.getAllUsers();
               
               const userFound = allUsers.find(user => value==user.email);
               console.log(req.body.password);
               
            if(userFound){
                  console.log('entro a validar pass');
                 if(bcrypt.compareSync(req.body.password, userFound.password)){
                     return true;
                     console.log('CLAVE OK');
                 }else
                 { console.log('CLAVE error');
                     return false;
                    }
                    
              }
             return false; 

           }). withMessage('email o password erroneos')

    

    ]









}