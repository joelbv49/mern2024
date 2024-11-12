const trainerModel = require('./trainerSchema');
const mongoose = require('mongoose');

const mongo_url = "mongodb+srv://joelbv49:Joelbvarghese49@cluster0.ls8vp.mongodb.net/";

const ConnectToMongo = async()=>{
    mongoose.Promise = global.Promise;
    try{
        await mongoose.connect(mongo_url);
        console.log("connected to mongodb");
    }
    catch(error){
        console.error("failed to connect to database",error);
        process.exit(1);
    }
}

const readAll = async()=>{
    await ConnectToMongo();

    try{
        const trainers = await trainerModel.findOne({name:'joel'});
        console.log("all trainers",trainers);
    }
    catch(error){
        console.error("failed to read all trainers",error);
    }
    finally{
        await mongoose.disconnect();
        console.log("disconnected from mongodb");
    }
}

readAll();

