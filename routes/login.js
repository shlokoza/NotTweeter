var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Getting user model
var User = require('../model/users')

//Login router get method...
router.get('/', (req, res, next) => {

    //rendering the according login ejs file.
      res.render("login.ejs");
      
});

//Post router for the login page.
router.post('/', (req,res) => {

  //getting username and password from login page and assigning them to variables
    var username = req.body.username;
    var password = req.body.password;

    //finding user process for the user entered values.
    User.findOne({$or: [{username: username}]})
      .then(user => {
        if(user){
          bcrypt.compare(password, user.password, (err, result) =>{
            if(err){
              res.json({
                error: err
              })
            }
            
            //if user found then redirect to the home page along with the name
            if(result){
              res.redirect('/home/?name=' + user.Fname + " " + user.Lname + "&uname=" + user.username)
            }
            
            //if the password does not match... throw error
            else{
              res.json({
                messege: 'Password does not match'
              })
            }
          })
        }

        //if username does not match... throw error
        else{
          res.json({
            messege: 'No User Found!'
          })
        }
      })
    
})

//exporting the router
module.exports = router;