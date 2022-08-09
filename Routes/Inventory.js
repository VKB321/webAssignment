const express = require("express")
const app = express.Router()
const Invertorycontrol = require("../models/Inventory")



app.post("/",(req,res)=>{
    Invertorycontrol.insertMany(req.body).then((data)=>{
        res.status(200).json("Data Added")
    }).catch((err)=>{
        res.status(400).json("Network Issue")
    })
    })

app.get("/",(req,res)=>{
        Invertorycontrol.find().then((data)=>{
            res.status(200).json(data)
        }).catch((err)=>{
            res.status(400).json("Network Issue")
        })
})

app.get("/electronics",(req,res)=>{
    Invertorycontrol.find({inventory_type:"Electronics"}).then((data)=>{
        res.status(200).json(data)
    }).catch((err)=>{
        res.status(400).json("Network Issue")
    })
})
app.get("/furniture",(req,res)=>{
    Invertorycontrol.find({inventory_type:"Furniture"}).then((data)=>{
        res.status(200).json(data)
    }).catch((err)=>{
        res.status(400).json("Network Issue")
    })
})

module.exports = app

