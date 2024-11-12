const { default: mongoose } = require('mongoose');
const ConnectToMongo = require('./db.js');
const trainerModel = require('./trainerSchema.js');

const update = async()=>{
    await ConnectToMongo();

    try{
        const update = await trainerModel.findOneAndUpdate({name:"joel"},{$set:{technology:"mern"}},{new:true});
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