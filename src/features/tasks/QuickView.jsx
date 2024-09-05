/* eslint-disable react/prop-types */
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  priorityTextMap,
  priorityBorderMap,
  getTimeDifference,
  formatDate,
  getDueDateStyle,
} from "../../helper/helper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuickView({ title, creator, dueDate, priority }) {
  return (
    <div
      className="mb-2 flex h-40 w-[280px] cursor-pointer flex-col gap-3 rounded-lg border bg-white p-3 shadow-sm"
      // onClick={() => onSelectedTask(task)}
    >
      <div className="flex flex-col gap-1">
        <span
          className={`${priorityTextMap[priority.toLowerCase()]} border ${priorityBorderMap[priority.toLowerCase()]} w-14 rounded-full py-1 text-center text-xs font-medium text-black`}
        >
          {priority}
        </span>
        <span className="text-base font-semibold capitalize text-gray-700">
          {title}
        </span>
      </div>
      <div className="flex items-start gap-3">
        <FontAwesomeIcon
          icon={faUser}
          className="ml-1 mt-1 text-sm text-gray-400"
        />
        <div className="flex flex-col">
          <span className="text-xs">Created by</span>
          <span className="text-xs font-semibold capitalize">{creator}</span>
        </div>
      </div>
      <div className="ml-1 flex items-center gap-3">
        <FontAwesomeIcon icon={faCalendar} className="text-sm text-gray-400" />
        <div className="flex h-6 gap-2">
          <span
            className={`font-semiBold flex items-center rounded-md px-1 text-xs font-semibold ${getDueDateStyle(dueDate)}`}
          >
            Due date {formatDate(dueDate)}
          </span>

          <span className="flex items-center text-xs font-medium text-stone-500">
            {getTimeDifference(dueDate)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default QuickView;
