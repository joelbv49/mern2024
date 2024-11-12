const mongoose = require('mongoose');

const mongo_url = "mongodb+srv://joelbv49:Joelbvarghese49@cluster0.ls8vp.mongodb.net/"

const ConnectToMongo = async()=>{
    mongoose.Promise = global.Promise; //changing from default promise to global promise
    try{
        await mongoose.connect(mongo_url);
        console.log("Connected to mongodb");
    }
    catch(error){
        console.error("failed to connect to mongodb",error);
        process.exit(1);
    }

}

module.exports = ConnectToMongo;