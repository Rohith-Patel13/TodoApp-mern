
const {Schema,model} = require("mongoose")

const TodosSchema = new Schema({
    title:{type:String},
    description:{type:String},
    status:{type:String,enum:["pending","in-progress","completed"],default:"pending"},
    dueDate:{type:Date}
})

const Todo = model("Todo",TodosSchema)
module.exports = Todo
