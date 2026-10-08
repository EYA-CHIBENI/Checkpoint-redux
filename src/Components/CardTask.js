import { useDispatch } from "react-redux"
import { deleteTask, doneTask } from "../Redux/Actions"

const CardTask=({task})=>{

    const dispatch = useDispatch()

    return(
        <div>
            <h2 className={task.isDone && "chateb"} >{task.desc}</h2>
            {/* <h3>{task.isDone ? "True" : "False"}</h3> */}
            <button onClick={()=> dispatch(doneTask(task.id))}>{task.isDone ? "Not Done" : "Done"}</button>
            <button onClick={()=> dispatch(deleteTask(task.id))}>Delete</button>
        </div>
    )
}

export default CardTask