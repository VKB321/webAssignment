const mongoose = require("mongoose")
const Orderschema = new mongoose.Schema({
    customer_id : String,
    inventory_id : String,
    item_name : String,
    quantity : Number
})

const Ordermodel = mongoose.model("Orders",Orderschema)
module.exports = Ordermodel