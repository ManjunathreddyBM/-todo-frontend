import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = ({ setEditingTask }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/task/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteTask = (id) => {
        axios.delete(`/task/tasks/${id}`)
            .then(() => setTasks(tasks.filter(task => task.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <h3>{task.priority}</h3>
                        <h3>{task.status}</h3>
                        <button onClick={() => setEditingTask(task)}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
