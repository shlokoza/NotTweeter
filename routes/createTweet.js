var express = require('express');
var router = express.Router();
var Tweet = require('../model/tweet');

//Index router get method...
router.get('/', (req, res, next) => {

    //Fetching the data from the url parameters
    let name = req.query.name
    let uname = req.query.uname

    //rendering the according createTweet ejs file along with the parameters.
      res.render("createTweets.ejs", {name: name, uname: uname});
      
});

router.post('/', (req, res) => {

    //Requisting the data from the page body
    let Newtweet = req.body.tweet;

    //Fetching the data from the url parameters
    let name = req.query.name
    let uname = req.query.uname
    

    //Assigning the values to the user model from the form values
    let tweet = new Tweet({
        username: uname,
        tweet: Newtweet
  })

  //saving the assigned values to database and redirecting to the login page
  tweet.save()
      .then((result) => {
          res.redirect('/home/?name=' + name + "&uname=" + uname)
      })
      .catch((err) => {
          console.log(err)
      })

})

//exporting the router
module.exports = router;