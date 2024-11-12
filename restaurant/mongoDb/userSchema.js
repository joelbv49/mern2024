const mongoose = require('mongoose');
const ConnectToMongo = require('./orderdetailsSchema ');

const collection_name = "User_details";
const userDetails = new mongoose.schema({
    name: String,
    email: String,
    phone_number: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip_code: String
    },
    date_of_birth: Date,
    phone_number: String
});

// model
const user  = mongoose.model(collection_name,userDetails);

module.exports = user;