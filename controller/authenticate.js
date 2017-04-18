 var express = require('express');
var    router = express.Router();
 var jwt = require('jsonwebtoken');
 var secretKey = require('../config/config.js');
 console.log("auth library....");

router.use(function(req, res, next) {
  console.log("auth library....");
 var token = req.body.token || req.query.token || req.headers['x-access-token'];
 if (token) {
   jwt.verify(token, secretKey.secret, function(err, decoded) {
     if (err) {
       res.send({"status": false,"message": "Failed to authenticate token."});
     } else {
       req.decoded = decoded;
       next();
     }
   });
 } else {
   res.send({"status": false,"message": "No token provided."});
 }
});
module.exports = router;
