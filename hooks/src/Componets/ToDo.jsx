import React, { useState } from 'react';
import './ToDo.css'

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">📝 To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        className="todo-input"
      />
      <button onClick={addTask} className="todo-button">Add Task</button>
      <ul className="todo-list">
        {tasks.map((t, i) => (
          <li
            key={i}
            className={`todo-item ${t.done ? 'done' : ''}`}
          >
            <span onClick={() => toggleTask(i)} className="todo-text">
              {i + 1}. {t.text}
            </span>
            <span
              onClick={() => deleteTask(i)}
              className="todo-delete"
              title="Delete"
            >
              🗑️
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
