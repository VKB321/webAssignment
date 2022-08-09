const express = require("express")
const app = express.Router()
const Usermodel = require("../models/User")


app.post("/create",(req,res)=>{
    Usermodel.find().then((users)=>{
        if(users.length){
            Usermodel.find({email:req.body.email}).then((data)=>{
                if(data.length){
                    res.status(400).json("User Exist")
                }else{
                    let previousid = (users[users.length-1].customer_id).slice(2)
                    let number = parseInt(previousid)+1
                    Usermodel.create({customer_id:`OD${number}`,customer_name:req.body.customer_name,email:req.body.email}).then((user)=>{
                        res.status(200).json("User Has Added")
                    }).catch((err)=>{
                        res.status(400).json("Network Issue")
                    })
                }
            })
        }else{
            let id = 100;
         Usermodel.create({customer_id : `OD${id}`,customer_name:req.body.customer_name,email:req.body.email}).then((data)=>{
            res.status(200).json("User Has Added")
         }).catch((err)=>{
            res.status(400).json("Network Issue")
        })
        }
    })
})

app.get("/",(req,res)=>{
    Usermodel.find().then((users)=>{
        res.status(200).json(users)
    }).catch((err)=>{
        res.status(400).json("Network Issue")
    })
})


module.exports = app

