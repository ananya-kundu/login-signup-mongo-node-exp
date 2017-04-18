var express = require('express'),

  router = express.Router(),
  login = require('../model/userSchema');
// var localStorage = require('localStorage');
var connDb = require("../config/config.js");
var jwt = require('jsonwebtoken');
router.post('/login', function(req, res) {
    console.log("inside login");
    console.log(req.body);
try
{
  login.checkLoginData(req.body, function(err, user) {
    if (!err)
     {
       if (user != null) {
         var  loginPassword = req.body.password;
         var  newLoginPassword = user.password;

         var encryptLoginPassword = login.encrypt(loginPassword);

         console.log(encryptLoginPassword);
         console.log(newLoginPassword);

         if (newLoginPassword == encryptLoginPassword ) {
            var token = jwt.sign( {id:user.userid}, connDb.secret,{
						        expiresIn: 86400
              });
              res.send({ "status": true,"message": "valid password","token":token});
         } else {
           res.send({ "status": false,"message": "wrong password"});
         }
        }
        else{
          res.send({ "status": false,"message": "email does not exists"});
        }
    }
    else {
      res.send({ "status": false,"message": "email errors"});
    }
  });
}
catch(e){
  res.send({"status": false,"message": "server error"});
}
});

module.exports = router;
