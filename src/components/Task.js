import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteHandler, editHandler, toggleHandler } from '../redux/action';

function Task({ task }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleHandler(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteHandler(task.id));
  };

  const handleEdit = (newDescription) => {
    dispatch(editHandler(task.id, newDescription));
  };
console.log(task.id)
  return (
    <div>
      <div>
        <input type="checkbox" onChange={handleToggle} checked={task.isDone} />
        <input type="text" value={task.description} onChange={(e) => handleEdit(e.target.value)} />
      </div>
      <button onClick={handleDelete}> DELETE </button>
      
    </div>
  );
}

export default Task;
