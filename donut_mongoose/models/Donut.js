// requirements: require db/connection as 'mongoose'
const mongoose = require('./connection.js');

// create your donut schema:
const Donut = new Schema({
    //write your schema fields here
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: String,
    price: Number,
    qty: Number
    });

// export the donut model with module.exports
module.exports = {

}
