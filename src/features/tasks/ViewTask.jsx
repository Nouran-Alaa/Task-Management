import {
  faAlignJustify,
  faAt,
  faCalendar,
  faTag,
  faUser,
  faXmark,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  formatDate,
  priorityBorderMap,
  priorityTextMap,
} from "../../helper/helper";
import {
  clearSelectedTask,
  toggleViewTaskModal,
  deleteTask,
} from "../kanban/kanbanSlice";
import { useDispatch, useSelector } from "react-redux";

function ViewTask() {
  const dispatch = useDispatch();
  const { selectedTask } = useSelector((state) => state.kanban);
  if (Object.keys(selectedTask).length === 0) return;

  function handleCloseTask() {
    dispatch(clearSelectedTask());
    dispatch(toggleViewTaskModal());
  }
  function handleDeleteTask() {
    if (selectedTask.id) {
      dispatch(deleteTask({ taskId: selectedTask.id }));
      dispatch(clearSelectedTask());
      dispatch(toggleViewTaskModal());
    }
  }
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-transparent/10 p-4 backdrop-blur-sm">
      <div
        className={`flex h-2/3 w-[300px] flex-col gap-3 rounded-md border-t-8 bg-white px-4 py-3 md:w-[400px] 2xl:h-1/2 ${priorityBorderMap[selectedTask.priority.toLowerCase()]} `}
      >
        <div className="flex items-center justify-between py-3">
          <h1 className="font-semibold">{selectedTask.title}</h1>

          <FontAwesomeIcon
            icon={faXmark}
            className="cursor-pointer text-sm text-stone-500"
            onClick={handleCloseTask}
          ></FontAwesomeIcon>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faUser}
                className="text-xs text-stone-400"
              ></FontAwesomeIcon>
              <h1 htmlFor="" className="text-sm">
                Created By
              </h1>
            </div>
            <p
              type="text"
              //   value={taskCreator}
              className="ml-7 pl-1 text-xs text-stone-500 focus:outline-blue-400"
            >
              {selectedTask.creator}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faAt}
                className="text-xs text-stone-400"
              ></FontAwesomeIcon>
              <label htmlFor="" className="text-sm">
                Email
              </label>
            </div>
            <p
              type="text"
              className="ml-7 pl-1 text-xs text-stone-500 focus:outline-blue-400"
            >
              {selectedTask.email}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faAlignJustify}
                className="text-xs text-stone-400"
              ></FontAwesomeIcon>
              <label htmlFor="" className="text-sm">
                Task description
              </label>
            </div>
            <p
              type="text"
              //   value={taskCreator}
              className="ml-7 break-words pl-1 text-xs text-stone-500 focus:outline-blue-400"
            >
              {selectedTask.description}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-xs text-stone-400"
              ></FontAwesomeIcon>
              <h1 htmlFor="" className="text-sm">
                Due Date
              </h1>
            </div>
            <span className="ml-7 pl-1 text-xs text-stone-500 focus:outline-blue-400">
              {formatDate(selectedTask.dueDate)}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faTag}
                className="text-xs text-stone-400"
              ></FontAwesomeIcon>
              <label htmlFor="" className="text-sm">
                Task priority
              </label>
            </div>

            <div className="ml-7 w-24 pl-1 text-xs text-stone-500 focus:outline-blue-400">
              <span>
                {selectedTask.priority === "High"
                  ? "🔴 High"
                  : selectedTask.priority === "Low"
                    ? " 🔵 Low"
                    : "🟠 Medium"}
              </span>
            </div>
          </div>
        </div>
        <button
          className={`h-10 w-24 self-center rounded-md border-2 ${priorityBorderMap[selectedTask.priority.toLowerCase()]} text-sm ${priorityTextMap[selectedTask.priority.toLowerCase()]} sm:mt-4`}
          onClick={handleDeleteTask}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete
        </button>
      </div>
    </div>
  );
}

export default ViewTask;
