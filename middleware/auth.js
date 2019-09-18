const config = require('config');
const jwt = require('jsonwebtoken');

    function auth(req,res,next) {
        const token = req.header('x-auth-token');
        
        if(!token) {
            res.status(401).json({msg:"No token authorization denied"})
        }else{
        
        //verify token
         try {
             
        const decoded = jwt.verify(token,config.get('jwtSecret'));
        console.log(decoded);
        
        // Add user from payload
        req.user = decoded;
        next();
         } catch (error) {
             console.log(error);
             res.status(400)
             .json({msg: "Token Is Not Valid"});
         }
        }
    }

    module.exports =auth;