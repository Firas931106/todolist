import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addHandler } from '../redux/action';


function AddTask() {
    const [description, setDescription] = useState("")
    const dispatch = useDispatch();
    const addTasks = () => {
        const newTask = { description, id: Math.random(), isDone: false }
        dispatch(addHandler(newTask))
        setDescription('')
    }


    return (
        <div>
            <div>
                <input type="text" placeholder="Hi there" onChange={(e) => setDescription(e.target.value)} value={description} />
                <button onClick={addTasks} > Add Task</button>
            </div>

        </div>
    )
}

export default AddTask
