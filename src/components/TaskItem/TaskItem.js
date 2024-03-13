import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { delete_task, done_task } from "../Actions/action";
import { useDispatch } from "react-redux";
import EditTask from "../EditTask/EditTask";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const handleDone = (id) => {
    dispatch(done_task(id));
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{task.description}</Card.Title>
          <Button
            variant={!task.done ? "success" : "warning"}
            onClick={() => handleDone(task.id)}
          >
            {task.done ? "Not Done" : "Done"}
          </Button>
          <Button variant="primary" onClick={() => setShow(!show)}>
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => dispatch(delete_task(task.id))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
      <EditTask show={show} handleClose={handleClose} task={task} />
    </>
  );
};

export default TaskItem;
