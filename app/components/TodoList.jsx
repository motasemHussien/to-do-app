"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, [JSON.stringify(tasks)]);
  const getAllTasks = async () => {
    await axios
      .get("/api/tasks")
      .then(({ data }) => {
        console.log("mya mya", data.task);
        setTasks(data.task);
      })
      .catch(() => {
        //console.log("mish mya mya");
      });
  };

  // task.map(
  //   setTask(() => {
  //     <tr key={task.id}>
  //       <td>{task.title}
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Tasks</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <Task tasks={task} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
