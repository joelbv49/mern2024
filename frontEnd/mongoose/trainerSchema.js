const mongoose = require('mongoose');
const collection_name = "trainer";

const collection_fields = {
    name: String,
    name:String,
    location:String,
    technology:String,
    phone_number: String,
}

const collection_config = {
    timestamps: false
}

const TrainerSchema = mongoose.Schema(collection_fields,collection_config);
const TrainerModel = mongoose.model(collection_name,TrainerSchema);

module.exports = TrainerModel;
