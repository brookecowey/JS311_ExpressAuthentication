let jwt = require("jsonwebtoken");

const { sign } = require("jsonwebtoken");


let checkJWT = function(req, res, next){

    let value = req.get("Authorization");
    let signedToken;

    if(value){
      let parts = value.split(" ")
      if(parts[0] == "Bearer" && parts[1]){
        signedToken = parts[1];

      }
    }

    try{
      let token = jwt.verify(signedToken, process.env.JWT_SECRET);

      req.userinfo = token;
      
        next();

    } catch(err){
      console.log("Failed to verify JWT", err);
      res.sendStatus(401);
    }
   // if the request is valid, calll next()
  // if the request is not valid, sent back a 401 on response

}

module.exports = {
  checkJWT
}