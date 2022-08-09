const mongoose = require("mongoose")
const Userschema = new mongoose.Schema({
    customer_id : String,
    customer_name : String,
    email : {
        type : String,
        unique : true
    }
})

const Usermodel = mongoose.model("Users",Userschema)
module.exports = Usermodel