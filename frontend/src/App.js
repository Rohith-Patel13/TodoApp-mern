import {useState} from "react"
import "./App.css"
import Form from "./components/Form"


function App() {

    const [openForm,setOpenForm] = useState(false)



    const AddButtonClicked = ()=>{
        setOpenForm(!openForm)
    }


    return(
        <div className='bg'>
        <h1 className='mainHeading'>Todo List</h1>
        <div className='tasksContainer'>
          <h1 className="create-task-heading">
            Create <span className="create-task-heading-subpart">Task</span>
          </h1>
          <button
            type="button" 
            className="add-todo-button"
            onClick={AddButtonClicked}
          >
            Add Task
          </button>
          <div className="form-container">
            {
                openForm && (
                    <Form setOpenForm={setOpenForm} openForm={openForm} />
                )
            }
          </div>
          <h1 className="todo-items-heading">
            My <span className="todo-items-heading-subpart">Tasks</span>
          </h1>
        </div>
      </div>  
    )
}

export default App
