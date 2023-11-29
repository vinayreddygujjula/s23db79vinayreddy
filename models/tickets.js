const { Double } = require("mongodb")

const mongoose = require("mongoose")
const ticketsSchema = mongoose.Schema({
    
    eventName: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 100000
    },
    location: {
        type: String
    },
    ticketType: {
        type: String
    }
});
module.exports = mongoose.model("tickets", ticketsSchema)