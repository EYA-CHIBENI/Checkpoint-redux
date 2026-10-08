import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react"

const ListTasks=()=>{

    const tasks = useSelector(state=> state.tasks)
    const [filterTask, setFilterTask] = useState("ALL")

    return(
        <div>
            <div>
                <button onClick={()=> setFilterTask("ALL")}>All</button>
                <button onClick={()=> setFilterTask("DONE")}>Done</button>
                <button onClick={()=> setFilterTask("NOTDONE")}>Not Done</button>
            </div>


            {
                filterTask == "ALL" ?
                tasks.map((task,i,t)=> <CardTask key={task.id} task={task} />)
                :
                filterTask == "DONE" ? 

                tasks.filter((el,i,t)=> el.isDone == true).map((task,i,t)=> <CardTask key={task.id} task={task} />)

                :

                tasks.filter((el,i,t)=> el.isDone == false).map((task,i,t)=> <CardTask key={task.id} task={task} />)
            }
        </div>
    )
}

export default ListTasks