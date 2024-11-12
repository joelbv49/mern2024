const mongoose = require('mongoose');

const mongo_url = "mongodb+srv://root:root2@cluster0.njbr8.mongodb.net/";

const ConnectToMongo = async()=>{
    mongoose.Promise = global.Promise;

    try{
        await mongoose.connect(mongo_url);
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.error("Error connecting to MongoDB",error);
        process.exit(1);
    }
}

module.exports = ConnectToMongo;