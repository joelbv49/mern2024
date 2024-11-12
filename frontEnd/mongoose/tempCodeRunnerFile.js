const { default: mongoose } = require('mongoose');
const mongo = require('./db.js');
const trainerModel = require('./trainerSchema.js');

const update = async()=>{
    await mongo.ConnectToMongo();

    try{
        const update = await trainerModel.updateOne({name:"joel"},{$set:{technology:"fullStack development"}});
        console.log("updated successfully",update);
    }
    catch(error){
        console.error("Failed to update",error);
        process.exit(1);
    }
    finally{
        mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

update();