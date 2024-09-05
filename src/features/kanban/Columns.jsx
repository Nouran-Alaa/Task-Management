import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AutoResizeInput from "./AutoResizeInput";
import TaskCard from "../tasks/TaskCard";
import CreateColumn from "./CreateColumn";
import { useDispatch, useSelector } from "react-redux";
import { updatePhaseTitle, moveTask, deleteColumn } from "./kanbanSlice";
import { phaseBorderMap } from "../../helper/helper";

function Columns() {
  const dispatch = useDispatch();
  const { searchTasks } = useSelector((state) => state.kanban);

  const handleTitleChange = (index, newTitle) => {
    dispatch(updatePhaseTitle({ index, newTitle }));
  };

  const handleDrop = (e, destinationIndex) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const sourceIndex = parseInt(e.dataTransfer.getData("sourceIndex"), 10);

    if (!taskId || isNaN(sourceIndex) || isNaN(destinationIndex)) {
      console.error("Invalid data during drop", {
        taskId,
        sourceIndex,
        destinationIndex,
      });
      return;
    }

    dispatch(moveTask({ taskId, sourceIndex, destinationIndex }));
  };

  const handleDeleteColumn = (index) => {
    dispatch(deleteColumn({ index }));
  };
  return (
    <div className="mt-[140px] grid min-w-[1024px] auto-cols-max grid-flow-col gap-3 md:mt-[130px]">
      {searchTasks.map((column, index) => (
        <div
          key={index}
          className="flex h-[750px] w-[280px] flex-col"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, index)}
        >
          <div
            className={`mb-4 rounded-lg border border-t-4 p-2 text-center ${phaseBorderMap[column.color]} bg-white`}
          >
            <div className="flex h-[25px] items-center justify-between">
              <div className="flex items-center justify-center gap-3">
                <AutoResizeInput
                  value={column.title}
                  onTitleChange={(e) =>
                    handleTitleChange(index, e.target.value)
                  }
                  color={column.color}
                />
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-200 text-[11px] text-gray-600">
                  {column.tasks.length}
                </span>
              </div>

              <div className="flex gap-4">
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-200">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="cursor-pointer rounded-full text-sm"
                    style={{ color: "gray" }}
                    onClick={() => handleDeleteColumn(index)}
                  />
                </div>
              </div>
            </div>
          </div>
          <TaskCard tasks={column.tasks} phaseIndex={index} />
        </div>
      ))}
      <CreateColumn />
    </div>
  );
}

export default Columns;
