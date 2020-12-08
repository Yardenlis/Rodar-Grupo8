// acceso funcion para acceso a datos
const fs= require('fs');
const path = require ('path');


 const usersFilePath= path.join(__dirname,'../data/users.json');

const usersAccess = {
    
    getAllUsers(){
        
        const jsonUsers = fs.readFileSync(usersFilePath,{encoding:'utf-8'});
        return JSON.parse(jsonUsers);           

    },
    setAllUsers(allUsers){
    
     const allUsersJson= JSON.stringify(allUsers,null,"");
     fs.writeFileSync(usersFilePath,allUsersJson);


    },


    getUses(id){
        
       this.getAllUsers().find((user)=>{
         return (id==user.id? product : null)
    });
    },



    setUser(user){
      console.log(user);
      user.id = ++this.getAllUsers().pop().id;
      todos = this.getAllUsers();
      todos.push(user);
      this.setAllUsers(todos);
       
     },
     
         
         
         


     
   
    }
    module.exports = usersAccess;

