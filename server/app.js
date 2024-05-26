const express = require("express")
const app = express()
const todosRoutes = require("./routes/todos")
const morgan = require("morgan")
const cors = require("cors")
const mongoose  = require("mongoose")
require("dotenv").config()
app.use(express.json())
app.use(cors())
app.use(morgan("dev")); // Added morgan for logging HTTP requests

app.listen(9845,async()=>{
    console.log("server starts at given port")
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected")
    }catch(error){
        console.log(error.message)
    }
})

app.use("/api",todosRoutes)