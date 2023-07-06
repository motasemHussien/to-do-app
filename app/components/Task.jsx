"use client";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import Modal from "./Modal";
import axios from "axios";

const Task = ({ tasks }) => {
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [modalOpenDelete, setModalOpenDelete] = useState(false);

  const [taskToEdit, setTaskToEdit] = useState(tasks.title);

  const handleSubmitEditTodo = async (e) => {
    e.preventDefault();
    await axios
      .patch("/api/tasks", { title: taskToEdit, id: tasks.id })
      .then((data) => {
        setTaskToEdit("");
        setModalOpenEdit(false);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  const handleDeleteTask = async () => {
    await axios.delete("/api/tasks", { params: { id: tasks.id } }).then(() => {
      console.log("deleted");
      setModalOpenDelete(false);
    });
  };
  return (
    <tr key={tasks?.id}>
      <td className="w-full">{tasks?.title}</td>

      <td className="flex gap-5">
        <AiOutlineEdit
          onClick={() => setModalOpenEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit Task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              <button type="submit" className="btn ">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <AiOutlineDelete
          onClick={() => setModalOpenDelete(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={modalOpenDelete} setModalOpen={setModalOpenDelete}>
          <h3 className="text=lg">You want to delete this task?</h3>
          <div className="modal-action">
            <button onClick={handleDeleteTask}>Yes</button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
