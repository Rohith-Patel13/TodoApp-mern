const express = require("express")
const router = express.Router()
const TodosControllers = require("../controllers/todos")

router.post("/AddTask",TodosControllers.AddTask)

router.get("/AllTasks",TodosControllers.getAllTasks)

module.exports = router
