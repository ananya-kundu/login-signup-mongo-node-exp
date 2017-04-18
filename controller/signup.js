var express = require('express'),
 router = express.Router();
var signup = require('../model/userSchema.js');
console.log("sksdkkdskbkksdbksbdksbksbdk");
  router.post('/signup', function(req,res){
    try{
      console.log("inside signup");
			 var userData = req.body;
			 console.log("I am user data",userData);

       signup.saveUserData(userData,function(err,result){
         if(!err){
           if(!result){
              res.send({"status":true,"message": "already exists.."});
            }else{
              res.send({"status":true,"message": "Registration Successfull"});
            }
          }else {
                if (err == undefined) {
                    res.send({"status": false,"msg": "data is not saved"});
                } else {
                  res.send({"status":false,"message": "validation error"});
                }
              }
          });
        }catch (e) {
          console.log(e);
          res.send({"status": false,"message": "server error"});
        }
      });

 module.exports = router;
