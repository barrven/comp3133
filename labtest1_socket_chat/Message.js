const mongoose = require("mongoose");

//Declare MongoDB Schemas
const Message = mongoose.model('Message', {
    from_user: String,
    to_user: String,
    room: String,
    message: String,
    date_sent: String

})

module.exports = Message;