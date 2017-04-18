var express = require('express'),
	router = express.Router();

console.log("I'm in index.js");
router.use(require('./signup'));
router.use(require('./login'));
router.use("/readuserprofile",require("./authenticate"),require("./userprofile"));


module.exports = router;
