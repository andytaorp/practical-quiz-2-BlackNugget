import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    // TODO: write code to add a new task
    setTasks([...tasks, { id: Date.now(), description: newTask, completed: false }]);
  };

  const handleToggleTask = (id) => {
    // TODO: write code to toggle a task's status
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    // TODO: write code to delete a task
      setTasks(tasks.filter((task) => task.id !== id));
    };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      {/*TODO: add a form to add a new task*/}
      {/*TODO: add a list of tasks*/}
      <Form onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;