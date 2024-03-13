import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add_task } from "../Actions/action";
const AddTask = () => {
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add_task(description));
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20PX" }}
    >
      <Form style={{ width: "543px" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Button variant="primary" style={{ height: "37px" }} onClick={handleAdd}>
        Primary
      </Button>
    </div>
  );
};
export default AddTask;
