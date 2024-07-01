import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import './Task.css';

const Task = ({ task, deleteTask, updateTaskStatus }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'To Do':
        return 'status-todo';
      case 'In Progress':
        return 'status-in-progress';
      case 'Done':
        return 'status-done';
      default:
        return '';
    }
  };

  return (
    <ListGroup.Item className="task-item">
      <Row>
        <Col>
          <h5>{task.title}</h5>
          <p>{task.description}</p>
          <p className={getStatusClass(task.status)}>Status: {task.status}</p>
        </Col>
        <Col md="auto">
          <Button
            variant="success"
            onClick={() => updateTaskStatus(task.id, 'To Do')}
            className="btn btn-todo"
          >
            To Do
          </Button>
          <Button
            variant="warning"
            onClick={() => updateTaskStatus(task.id, 'In Progress')}
            className="btn btn-in-progress"
          >
            In Progress
          </Button>
          <Button
            variant="info"
            onClick={() => updateTaskStatus(task.id, 'Done')}
            className="btn btn-done"
          >
            Done
          </Button>
          <Button variant="danger" onClick={() => deleteTask(task.id)} className="btn">
            Delete
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Task;
