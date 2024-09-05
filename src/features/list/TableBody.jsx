function TableBody({ currentTasks, formatDate, getTimeDifference    }) {
  return (
    <tbody>
      {currentTasks.map((task) => (
        <tr key={task.id} className="border-t border-gray-200 text-sm">
          <td className="h-[30px] whitespace-nowrap px-6 py-2">
            <span
              style={{ color: `${task.phaseColor.toLowerCase()}` }}
              className="font-medium capitalize"
            >
              {task.phaseTitle}
            </span>
          </td>
          <td className="h-[30px] whitespace-nowrap px-6 py-2">{task.title}</td>
          <td className="h-[30px] whitespace-nowrap px-6 py-2">
            {task.description || "Empty"}
          </td>
          <td className="h-[30px] whitespace-nowrap px-6 py-2">
            <span
              className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold leading-5 text-stone-100 ${
                task.priority.toLowerCase() === "high" ? "bg-red-500" : ""
              } ${
                task.priority.toLowerCase() === "medium" ? "bg-orange-500" : ""
              } ${task.priority.toLowerCase() === "low" ? "bg-blue-500" : ""}`}
            >
              {task.priority || "Empty"}
            </span>
          </td>
          <td className="h-[30px] whitespace-nowrap px-6 py-2">
            {task.dueDate
              ? `${formatDate(task.dueDate)} (${getTimeDifference(
                  task.dueDate,
                )})`
              : "Empty"}
          </td>
          <td className="h-[30px] whitespace-nowrap px-6 py-2">
            {task.creator || "Empty"}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
