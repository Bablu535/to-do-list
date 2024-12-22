import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; // Import delete icon
import "./Todoapp.css"; // Link the CSS file for styling

// TodoApp Component
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Add a new task
  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  // Delete a task by index
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Toggle task completion status
  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-button">
          Add Task
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span className="task-text">{task.text}</span>

            <div className="task-buttons">
              <button
                onClick={() => handleCompleteTask(index)}
                className="complete-button"
              >
                ✅
              </button>

              <FaTrash
                onClick={() => handleDeleteTask(index)}
                className="delete-icon"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
