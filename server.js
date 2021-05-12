const express = require('express')
const app = express()
const mongoose = require('mongoose')


//Defining the database URL and connecting the database using mongoose.
const url = "mongodb+srv://nottweeter:nottweeter@cluster0.tb84k.mongodb.net/nottweeter?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//assigning js files to a variable through require function
const index = require('./routes/index')
const login = require('./routes/login')
const register = require('./routes/register')
const createTweet = require('./routes/createTweet')

//setting the view engine
app.set('view-engine', 'ejs');

app.use(express.urlencoded({ extended: false }))

//defining routes and paths
app.use('/home', index)
app.use('/', login)
app.use('/register', register)
app.use('/createTweets', createTweet)
