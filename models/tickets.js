const mongoose = require("mongoose")
const ticketsSchema = mongoose.Schema({
    
    eventName: String,
        venue: String, 
        price: Number, 
        location: String, 
        ticketType: String 

})
module.exports = mongoose.model("tickets", ticketsSchema)