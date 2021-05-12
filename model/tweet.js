//defining required variables for database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema for tweet database
const tweetSchema = new Schema({

    username: {
        type: String,
        required: true
    },

    tweet: {
        type: String,
        required: true
    }
}, { timestamps: true })

//creating model for tweets database
const Tweet = mongoose.model('Tweet', tweetSchema);

//exporting the model
module.exports = Tweet;