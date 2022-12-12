import { createContext, useReducer } from "react"

export const AppStore = createContext()

const initialState = {
    undoneTasks : [],
    doneTasks: [],
    tasksDone: false,
    removeTasks: false
}

const reducer = (state, action) => {
    if (action.type === "ADD_ITEMS") {
        const newItems = [...state.undoneTasks, action.payload]
        return {...state, undoneTasks: newItems }
    }
    if (action.type === "TASK_DONE") {
        const newUndoneTask = state.undoneTasks.filter((x) => x.id !== action.payload);
        const item = state.undoneTasks.find((x) =>  x.id === action.payload);
        const newDoneTask = [...state.doneTasks, item] 
        return{...state, undoneTasks: newUndoneTask, doneTasks: newDoneTask}
    }
    return state;
}

function Store({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch}
    return (
        <AppStore.Provider value={value}>{children}</AppStore.Provider>
    )
}

export default Store
