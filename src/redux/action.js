import { ADDTASK, DELETE, EDITTASKS, TOGGLETASK } from "./type-actions"

export const addHandler = (newTodo) => {
    return {
        type: ADDTASK,
        payload: newTodo
    }
}
export const deleteHandler = (taskId) => {
    return {
        type: DELETE,
        payload: taskId
    }
}
export const toggleHandler = (taskId) => {
    return {
        type: TOGGLETASK,
        payload: taskId
    }
}
export const editHandler = (taskId, newDescription) => {
    return {
        type: EDITTASKS,
        payload: {
            taskId,
            description:newDescription
        }
    }

}
