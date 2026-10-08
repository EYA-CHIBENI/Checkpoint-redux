import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"

const AddTask=()=>{
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch()

    const handleAdd=()=>{

         if (desc == '') {
            alert("Thabet ro7ek")
         } else {
            dispatch(addTask(desc))
            setDesc("")
         }   

        
    }
    return(
        <div>
            <input value={desc} type="text" onChange={(e)=> setDesc(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddTask