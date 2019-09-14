const express = require('express');
const router = express.Router();
const bcrypt =require('bcrypt');;

// Item Model Mongoose
// const Item = require('../../model/Item');

const db = require('../../model/db');




// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res)=>{

    const {name, email, password} = req.body;

    // Simple Validiation
    if(!name || !email || !password){
        return res.status(400).json({msg:"Please Enter All Fields"} );
    }

    con.query(`SELECT email FROM users WHERE email='${email}' LIMIT 1`, function (err, result) {
        if (err) throw err;
            // if
            console.log(result[0]);
            
            if (result[0]) return res.status(400).json({msg:"User already exists"});
        
            const newUser = {
                name,
                email,
                password
            }

            // Create Salt and hash
            bcrypt.genSalt(10,(err,salt)=>{
                if (err) throw err;
                bcrypt.hash(newUser.password, salt, (err, hash) =>{
                    if (err) throw err;
                    newUser.password=hash;
                    con.query(`INSERT INTO users (id, name, email, password) VALUES (null,'${newUser.name}', '${newUser.email}', '${newUser.password}')`, function (err, result) {
                        if (err) throw err;
                           console.log(result);   
                           res.json({msg:"User is successfully added",user:{emai:newUser.email,id:result.insertId,name:newUser.name}}); 
                    }); 
                })
            })
         
        });  
     
  

//  res.send("Register");
});

module.exports = router;