import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'


function ListTask() {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("All");
  const filteredTasks =
    filter === "Done"
      ? tasks.filter((task) => task.isDone)
      : filter === "Not Done"
        ? tasks.filter((task) => !task.isDone)
        : tasks;
  console.log(filteredTasks)
  return (
    <div className='List-task'>
      <div className='button-container'>
        <button className='button-done' onClick={() => setFilter("Done")}>Done</button>
        <button onClick={() => setFilter("All")}>All</button>
        <button className='button-notDone' onClick={() => setFilter("Not Done")}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask
