
const Todo = require("../models/todos")


exports.AddTask = async (requestObject,responseObject)=>{
    try {
        const todo = await Todo.create(requestObject.body)
        responseObject.status(200).send("AddTask")
    } catch (error) {
        responseObject.status(500).send(error.message)
    }
}



exports.getAllTasks = async (requestObject,responseObject)=>{
    try {
        responseObject.status(200).send("getAllTasks")
    } catch (error) {
        responseObject.status(500).send(error.message)
    }
}
