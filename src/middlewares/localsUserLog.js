module.exports= (req,res,next)=>{

   res.locals.userLog = false;

   if ( req.session.userLog){
        res.locals.userLog= req.session.userLog;
   }
   return next();



}