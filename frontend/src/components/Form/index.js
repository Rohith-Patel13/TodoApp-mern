import "./index.css"
import xmark from "../../images/xmark.svg"

function Form({setOpenForm,openForm}) {

  const closeBtnClicked = ()=>{
    setOpenForm(!openForm)
  }  

  return (
    <form>
        <img src={xmark} alt="xmark" className="cross-image" onClick={closeBtnClicked} />
        <div>
            <label>Title</label>
            <input placeholder="Enter Title"/>
        </div>
        <div>
            <label>Description</label>
            <textarea placeholder="Enter Description"/>
        </div>
        <select>
            <option>pending</option>
            <option>in-progress</option>
            <option>completed</option>
        </select>
        <div>
            <label>Date</label>
            <input type="date"/>
        </div>
        <button type="button" className="cursor-pointer">Add Task</button>
    </form>
  )
}

export default Form

