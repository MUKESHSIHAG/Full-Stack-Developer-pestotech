import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    setTasks(response.data);
  };

  const addTask = async (task) => {
    await axios.post('http://localhost:5000/tasks', task);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  const updateTaskStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/tasks/${id}`, { status });
    fetchTasks();
  };

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.status === filter);

  return (
    <Container className="container">
      <Row>
        <Col>
          <h1 className="center-heading">Task Management</h1>
          <div className="task-form">
            <TaskForm addTask={addTask} />
          </div>
          <div className="filter-section">
            <label>Filter by status: </label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="task-list">
            <TaskList tasks={filteredTasks} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
