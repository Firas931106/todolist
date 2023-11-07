import { ADDTASK, DELETE, EDITTASKS, TOGGLETASK } from './type-actions'

const initialState = {
    tasks: []
}
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.playload)
            }
        case TOGGLETASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            isDone: !task.isDone
                        }
                    }
                    return task

                })
            }
        case EDITTASKS:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            description: action.payload.description
                        };
                    }
                    return task
                })
            }


        default:
            return state
    }
}


