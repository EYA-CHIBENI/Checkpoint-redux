import { ADDTASK, DELETETASK, DONETASK } from "./ActionTypes"

export const addTask=(payload)=>{
    return(
        {
            type : ADDTASK,
            payload
        }
    )
}

export const doneTask=(payload)=>{
    return(
        {
            type : DONETASK,
            payload
        }
    )
}


export const deleteTask=(payload)=>{
    return(
        {
            type : DELETETASK,
            payload
        }
    )
}