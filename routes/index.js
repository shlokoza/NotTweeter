var express = require('express');
var router = express.Router();
var Tweet = require('../model/tweet')

//Index router get method...
router.get('/', (req, res, next) => {

    //Fetching the data from the url parameters
    let name = req.query.name
    let uname = req.query.uname

    Tweet.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render("index.ejs", {name: name, uname: uname, tweets: result});
    })
    .catch((err) => {
      console.log(err)
    })

    //rendering the according index ejs file along with the parameters.
      
      
});

router.post('/', (req,res) => {

})

//exporting the router
module.exports = router;