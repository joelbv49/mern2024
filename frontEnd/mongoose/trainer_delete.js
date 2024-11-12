const mongoose = require('mongoose');
const ConnectToMongo = require('./db.js');
const trainerModel = require('./trainerSchema.js');


// delete 
const deleteUser =  async()=>{
    await ConnectToMongo();

    try{
        const Del = await trainerModel.findOneAndDelete({name:"joel"});
        console.log("deleted successfully",Del);
    }
    catch(error){
        console.error("Failed to delete user",error);
        process.exit(1);
    }
    finally{
        mongoose.disconnect();
        console.log("Connection closed");
    }
}

deleteUser();