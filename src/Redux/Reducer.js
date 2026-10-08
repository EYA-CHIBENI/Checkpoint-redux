import { ADDTASK, DELETETASK, DONETASK } from "./ActionTypes"

const initialState = {
    tasks : [
        {desc : "Buy fruit", isDone : false, id : Math.random()},
        {desc : "Buy water", isDone : false, id : Math.random()},
        {desc : "Buy bread", isDone : false, id : Math.random()},
    ]
}

const Reducer=(state = initialState, action)=>{
    switch (action.type) {
        
        case ADDTASK : return {...state, tasks : [...state.tasks, {desc : action.payload, isDone : false, id : Math.random() }]  }
        case DONETASK : return {...state, tasks : state.tasks.map((el,i,t)=> el.id == action.payload ? {...el, isDone : !el.isDone} : el)}
        case DELETETASK : return {...state, tasks : state.tasks.filter((el ,i, t)=> el.id != action.payload)}
        default: return state
    }
}

export default Reducer