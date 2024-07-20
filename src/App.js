import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

const App = () => {
  const [editingTask, setEditingTask] = useState(null);

  return (
      <div>
        <h1>To-Do List</h1>
        <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
        <TaskList setEditingTask={setEditingTask} />
      </div>
  );
};

export default App;
