const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")
const app = express()
const Inventoryroute = require("./Routes/Inventory")
const Userroute = require("./Routes/User")
const Orderroute = require("./Routes/Order")
app.use(express.json())

app.listen(3007,(err)=>{
  if(!err){
     console.log(`Server is Running..`)
  }else{
    console.log("Database Connection Error")
  }
})

mongoose.connect("mongodb://localhost/api_web_tech_assignment").then((data)=>{
    console.log("Connected to DataBase")
})


app.use("/inventory",Inventoryroute)
app.use("/user",Userroute)
app.use("/order",Orderroute)