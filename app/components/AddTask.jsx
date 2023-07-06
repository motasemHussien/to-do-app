"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useRouter } from "next/navigation";
const AddTask = () => {
  // const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTextValue, setNewTextValue] = useState("");

  const handleSubmitNewTodo = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/tasks", { title: newTextValue })
      .then(() => {
        setNewTextValue("");
        setModalOpen(false);
      })
      .catch((error) => console.log(error));
  };
  // router.refresh;
  // useEffect(() => {}, []);
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add New Task <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new Task</h3>
          <div className="modal-action">
            <input
              value={newTextValue}
              onChange={(e) => setNewTextValue(e.target.value)}
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
    </div>
  );
};

export default AddTask;
