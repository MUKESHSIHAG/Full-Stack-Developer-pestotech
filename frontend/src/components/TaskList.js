import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, updateTaskStatus }) => {
  return (
    <ListGroup>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTaskStatus={updateTaskStatus}
        />
      ))}
    </ListGroup>
  );
};

export default TaskList;
