"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";

const TodoList = ({ session }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks();
  }, [tasks]);

  const getAllTasks = async () => {
    await axios
      .get(`/api/tasks?id=${session?.user?.id}`)
      .then(({ data }) => {
        setTasks(data.task);
      })
      .catch(() => {
        //console.log("mish mya mya");
      });
  };

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
