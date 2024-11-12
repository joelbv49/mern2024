const mongoose = require('mongoose');

const mongo_url = "mongodb+srv://joelbv49:Joelbvarghese49@cluster0.ls8vp.mongodb.net/"

const ConnectToMongo = async()=>{
    mongoose.Promise = global.Promise;
    try{
        await mongoose.connect(mongo_url);
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.error("failed to connect to database",error);
        process.exit(1);
    }

}


const collection_name = "trainer";

const collection_fields = {
    name:String,
    location:String,
    technology:String,
    phone_number: String,
};

const collection_config = {
    timestamps: false
};

const trainerScheme = mongoose.Schema(collection_fields,collection_config);
const TrainerModel = mongoose.model(collection_name,trainerScheme);


const createTrainer = async()=>{
    await ConnectToMongo();

    try{
        const trainerModel = new TrainerModel({
            _id: new mongoose.Types.ObjectId(),
            name: "joel",
            location: "kerala",
            technology: "Mern",
            phone_number: "7676698174"
        })
    
        const createDocument = await trainerModel.save();
        console.log("Trainer created successfully", createDocument);
    }
    catch(error){
        console.error("Failed to create trainer", error);
    }
    finally{
        mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
    
}

createTrainer();

