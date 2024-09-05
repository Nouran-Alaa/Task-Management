import {
  faAlignJustify,
  faAt,
  faCalendar,
  faTag,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setTask, toggleCreateTaskModal } from "../kanban/kanbanSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
function TaskForm({
  taskTitle,
  taskCreator,
  dueDate,
  priority,
  setTaskCreator,
  setDueDate,
  setPriority,
  setTaskTitle,
}) {
  /////////////
  const dispatch = useDispatch();
  /////////
  const [email, setEmail] = useState("Write your email");
  const [taskDescription, setTaskDescription] = useState(
    "Write task description",
  );

  /////////
  function handleCloseModal() {
    dispatch(toggleCreateTaskModal());
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Create new task object
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      dueDate: dueDate,
      priority: priority,
      creator: taskCreator,
      email: email,
    };
    dispatch(setTask(newTask));
    // reset form or perform additional actions
  }
  /////////
  return (
    <div className="lg:1/2 flex h-1/2 w-full flex-col gap-1 rounded-md bg-white px-4 py-3 sm:w-[400px]">
      <div className="flex items-center justify-between py-3">
        <input
          type="text"
          placeholder="Task Title"
          maxLength="25"
          onChange={(e) => setTaskTitle(e.target.value)}
          className="w-40 text-xl font-semibold focus:outline-blue-400"
          required
        />
        <FontAwesomeIcon
          icon={faXmark}
          className="cursor-pointer text-sm text-stone-500"
          onClick={handleCloseModal}
        ></FontAwesomeIcon>
      </div>

      <form className="mt-2 flex flex-col gap-2" onSubmit={handleSubmit}>
        <div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faUser}
              className="text-xs text-stone-400"
            ></FontAwesomeIcon>
            <label htmlFor="creator" className="text-sm">
              Created By
            </label>
          </div>
          <input
            id="creator"
            type="text"
            placeholder="Write your name"
            onChange={(e) => setTaskCreator(e.target.value)}
            className="ml-7 pl-1 text-xs text-stone-500 focus:outline-blue-400"
            required
          />
        </div>

        <div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faAt}
              className="text-xs text-stone-400"
            ></FontAwesomeIcon>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
          </div>
          <input
            id="email"
            type="email"
            placeholder="Write your email"
            onChange={(e) => setEmail(e.target.value)}
            className="ml-7 pl-1 text-xs text-stone-500 focus:outline-blue-400"
            required
          />
        </div>

        <div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faAlignJustify}
              className="text-xs text-stone-400"
            ></FontAwesomeIcon>
            <label htmlFor="description" className="text-sm">
              Task description
            </label>
          </div>
          <input
            id="description"
            type="text"
            placeholder="Write task description"
            onChange={(e) => setTaskDescription(e.target.value)}
            className="ml-7 pl-1 text-xs text-stone-500 focus:outline-blue-400"
            required
          />
        </div>

        <div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-xs text-stone-400"
            ></FontAwesomeIcon>
            <label htmlFor="dueDate" className="text-sm">
              Due Date
            </label>
          </div>
          <input
            id="dueDate"
            type="datetime-local"
            onChange={(e) => setDueDate(e.target.value)}
            className="ml-7 pl-1 text-xs text-stone-500 focus:outline-blue-400"
            required
          />
        </div>

        <div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faTag}
              className="text-xs text-stone-400"
            ></FontAwesomeIcon>
            <label htmlFor="priority" className="text-sm">
              Task priority
            </label>
          </div>
          <select
            id="priority"
            onChange={(e) => setPriority(e.target.value)}
            className="ml-7 w-24 pl-1 text-xs text-stone-500 focus:outline-blue-400"
            required
          >
            <option value="Low">🔵 Low</option>
            <option value="Medium">🟠 Medium</option>
            <option value="High">🔴 High</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-sm bg-blue-500 py-2 text-sm text-stone-100 2xl:mt-10"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
