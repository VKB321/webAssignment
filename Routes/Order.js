const express = require("express")
const app = express.Router()
const Ordermodel = require("../models/Order")
const InventoryModel = require("../models/Inventory")

app.post("/create",(req,res)=>{
    InventoryModel.find({inventory_id: req.body.inventory_id}).then((item)=>{
        if(item[0].available_quantity>=req.body.quantity){
          Ordermodel.create({customer_id:req.body.customer_id,inventory_id:req.body.inventory_id,item_name:req.body.item_name,quantity:req.body.quantity}).then((result)=>{
            let finalquantity = item[0].available_quantity - req.body.quantity;
            InventoryModel.updateOne({inventory_id: req.body.inventory_id},{$set : {available_quantity : finalquantity}}).then((value)=>{
                res.status(200).json("Quantity Updated")
            }).catch((err)=>{
                res.status(400).json("Network Issue")
            })
          })
        }else{
            res.status(400).json("out of stock")
        }
    })
    // Ordermodel.create(req.body).then((order)=>{
        
    // })
})
app.get("/",(req,res)=>{
    Ordermodel.find().then((orders)=>{
        res.status(200).json(orders)
    }).catch((err)=>{
        res.status(400).json("Network Issue")
    })
})

module.exports = app