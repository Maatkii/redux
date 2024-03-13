import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  const { tasks } = useSelector((state) => state);
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (
          <>
            <TaskItem task={task} />
          </>
        );
      })}
    </div>
  );
};

export default TaskList;
