
import "./index.css"
import deleteIcon from "../images/delete.svg"
import editIcon from "../images/edit.svg"



const MyTasks = (props)=>{
    const {eachTask}=props
    const {_id,title,description,status,dueDate} = eachTask
    return (
        <li className='todo-item-container'>
            <input id={_id} type="checkbox" className="checkbox-input" />
            <div className='label-container'>
                <label htmlFor={_id} className={`checkbox-label`}>{title}</label>
                <p>{description}</p>
                <p>{dueDate}</p>
                <p>{status}</p>
                <div>
                    <img className='edit-icon' alt="edit Icon" src={editIcon} />
                    <img className='delete-icon' alt="delete Icon" src={deleteIcon} />
                </div>
                
            </div>
        </li>
    )
}

export default MyTasks

