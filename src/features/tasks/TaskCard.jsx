/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  getDueDateStyle,
  formatDate,
  getTimeDifference,
  priorityBorderMap,
  priorityTextMap,
} from "../../helper/helper";
import { useDispatch } from "react-redux";
import {
  moveTask,
  toggleViewTaskModal,
  setSelectedTask,
} from "../kanban/kanbanSlice";
import { useCallback } from "react";
import debounce from "lodash.debounce";

function TaskCard({ tasks, phaseIndex }) {
  const dispatch = useDispatch();
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("sourceIndex", phaseIndex);
    console.log("Dragging task:", taskId, "from phase:", phaseIndex);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const sourceIndex = parseInt(e.dataTransfer.getData("sourceIndex"), 10);
    const destinationIndex = phaseIndex;
    dispatch(moveTask({ taskId, sourceIndex, destinationIndex }));
  };

  const handleViewTaskModal = useCallback(
    debounce((task) => {
      dispatch(setSelectedTask(task));
      dispatch(toggleViewTaskModal());
      console.log("clicked");
    }, 200),
    [dispatch],
  );

  return (
    <div
      className="mx-auto h-[600px] w-[280px] space-y-4 overflow-y-auto overflow-x-hidden 2xl:h-[700px]"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {tasks.map((task) => (
        <div
          key={task.id}
          className="mb-2 flex h-40 w-[280px] cursor-pointer flex-col gap-3 rounded-lg border bg-white p-3 shadow-sm"
          draggable
          onDragStart={(e) => handleDragStart(e, task.id)}
        >
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span
                className={`${priorityTextMap[task.priority.toLowerCase()]} border ${priorityBorderMap[task.priority.toLowerCase()]} w-14 rounded-full py-1 text-center text-xs font-medium text-black`}
              >
                {task.priority}
              </span>
              <FontAwesomeIcon
                icon={faEye}
                className="text-gray-400 hover:text-blue-400"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewTaskModal(task);
                }}
              ></FontAwesomeIcon>
            </div>
            <span className="text-base font-semibold text-gray-700">
              {task.title}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faUser}
              className="ml-1 mt-1 text-sm text-gray-400"
            />
            <div className="flex flex-col">
              <span className="text-xs text-stone-500">Created by</span>
              <span className="text-xs font-semibold">{task.creator}</span>
            </div>
          </div>
          <div className="ml-1 flex items-center gap-3">
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-sm text-gray-400"
            />
            <div className="flex h-6 gap-2">
              <span
                className={`font-semiBold flex items-center rounded-md px-1 text-xs font-medium ${getDueDateStyle(task.dueDate)}`}
              >
                Due date {formatDate(task.dueDate)}
              </span>

              <span className="flex items-center text-xs font-medium text-stone-500">
                {getTimeDifference(task.dueDate)}
              </span>
            </div>
          </div>
        </div>
      ))}
      {tasks.length === 0 && (
        <p className="text-center text-gray-500">No tasks</p>
      )}
    </div>
  );
}

export default TaskCard;
