//defining required variables for database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema for user database
const userSchema = new Schema({
    Fname: {
        type: String,
        required: true
    },

    Lname: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

//Creating model for users database
const User = mongoose.model('User', userSchema);

//exporting the model
module.exports = User;