
const Todo = require("../models/todos")


exports.AddTask = async (requestObject,responseObject)=>{
    try {
        const todo = await Todo.create(requestObject.body)
        responseObject.status(200).send(todo)
    } catch (error) {
        responseObject.status(500).send(error.message)
    }
}


exports.getAllTasks = async (requestObject,responseObject)=>{
    try {
        const todo = await Todo.find().lean()
        responseObject.status(200).send(todo)
    } catch (error) {
        responseObject.status(500).send(error.message)
    }
}



