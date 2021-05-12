var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')

//getting the user model
const User = require('../model/users')


//list where users are stored
users = []

//register router get method...
router.get('/', (req, res)=> {

    //Rendering the according Register ejs file
    res.render('register.ejs')
    
});

//Inde router post method
router.post('/', async (req,res) =>{

    //encrypting the password
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if(err){
            res.json({
                error: err
            })
        }

        //Assigning the values to the user model from the form values
        let user = new User({

            //Requisting the data from the page body and assigning them to model variables
            Fname: req.body.Fname,
            Lname: req.body.Lname,
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })
    
        //saving the assigned values to database and redirecting to the login page
        user.save()
            .then((result) => {
                res.redirect('/')
            })
            .catch((err) => {
                console.log(err)
            })
    })

})


//exporting the router
module.exports = router;