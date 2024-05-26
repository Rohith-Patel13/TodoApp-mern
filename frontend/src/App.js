import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import xmark from "../src/components/images/xmark.svg";
import MyTasks from '../src/components/MyTasks/index'; 


function App() {
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: ""
  });
  const [tasks, setTasks] = useState([]); // State to store tasks


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/AllTasks"); // Adjust API endpoint accordingly
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array to fetch data only on component mount


  const AddButtonClicked = () => {
    setOpenForm(true);
  };

  const closeBtnClicked = () => {
    setOpenForm(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      setTasks([...tasks,formData])  
      await axios.post("/api/AddTask", formData);
      setFormData({
        title: "",
        description: "",
        status: "pending",
        dueDate: ""
      });
      setOpenForm(false);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="bg">
      <h1 className="mainHeading">Todo List</h1>
      <div className="tasksContainer">
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
          {openForm && (
            <form>
              <img
                src={xmark}
                alt="xmark"
                className="cross-image"
                onClick={closeBtnClicked}
              />
              <div>
                <label>Title</label>
                <input
                  placeholder="Enter Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  placeholder="Enter Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>status</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
               </div>

              <div>
                <label>Date</label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="button"
                className="cursor-pointer"
                onClick={handleSubmit}
              >
                Add Task
              </button>
            </form>
          )}
        </div>
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>
        {/* Render tasks */}
        <ul className="todo-items-container">
          {
            tasks.map((eachTask,index)=>(
                <MyTasks eachTask={eachTask} key={eachTask} />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
