const mongoose = require('mongoose');
const ConnectToMongo = require('./db.js');
const user = require('./userSchema.js');

const collection_name = 'Orderdetails';

const OrderdetailsSchema = new mongoose.Schema({
    userId: user._id,
    name: String,
    type: String,
    rating: String,
    top_food: String,
    location: String,
})

// model
const order = mongoose.model(collection_name,OrderdetailsSchema);

module.exports = order;
// create a new order

const createOrder = async (orderData) => {
    await ConnectToMongo();
    try {
        const newOrder = new order(orderData);
        await newOrder.save();
        console.log("Order created successfully");
    } catch (error) {
        console.error("Failed to create order", error);
        process.exit(1);
    }
    finally{
        mongoose.connection.close();
        console.log("Connection closed");
    }

}

