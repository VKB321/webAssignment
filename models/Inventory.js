const mongoose = require("mongoose")
const Inventoryschema = new mongoose.Schema({
    inventory_id : String,
    inventory_type:String,
    item_name : String,
    available_quantity : Number
})

const Inventorymodel = mongoose.model("Inventories",Inventoryschema)
module.exports = Inventorymodel