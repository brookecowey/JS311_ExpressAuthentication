let express = require("express");

let router = express.Router;

let authsMiddleware = require("../middleware/auths");

//this is unprotected (does not require the client to be authenticated)
route.get("/welcome", function(req, res){
    res.json("Thanks for stopping by!");
});

//this is protected (requires the client to be authenticated)
router.get("/wave", authsMiddleware.checkJWT, function(req, res){

  //get the jwt from the client, make sure it's valid

  let userID = req.userinfo.id;
  
  res.json('Welcome back #${userId}!');
})

router.get("/getBalance", authsMiddleware.checkJWT, controller.getBalance);
module.exports = router;