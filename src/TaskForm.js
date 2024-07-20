import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ editingTask, setEditingTask }) => {
    const [task, setTask] = useState({ title: '', description: '',  status: '', priority: '' });

    useEffect(() => {
        if (editingTask) {
            setTask(editingTask);
        }
    }, [editingTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingTask) {
            axios.put(`/task/tasks/${task.id}`, task)
                .then(response => setTask(response.data))
                .catch(error => console.error(error));
        } else {
            axios.post('/task/tasks', task)
                .then(response => setTask(response.data))
                .catch(error => console.error(error));
        }
        setEditingTask(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{editingTask ? 'Edit Task' : 'Create Task'}</h2>
            <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Title" required/>
            <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description"
                      required/>
            <input type="text" name="priority" value={task.priority} onChange={handleChange} placeholder="Priority"
                   required/>
            <button type="submit">{editingTask ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default TaskForm;
