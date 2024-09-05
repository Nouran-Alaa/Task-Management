import AutoResizeInput from "./AutoResizeInput";

function KanbanTitle({ columns, setColumns }) {
  const handleTitleChange = (index, newTitle) => {
    const updatedColumns = columns.map((column, i) =>
      i === index ? { ...column, title: newTitle } : column,
    );
    setColumns(updatedColumns);
  };

  return (
    <div className="ml-2 mt-2 grid h-full auto-cols-max grid-flow-col gap-2">
      {columns.map((column, index) => (
        <div key={index} className="w-56">
          <div
            className={`mb-2 rounded-lg border-t-4 p-2 text-center border-t-${column.color}-700 w-15 h-12 border`}
          >
            <div>
              <AutoResizeInput
                value={column.title}
                onTitleChange={(e) => handleTitleChange(index, e.target.value)}
                color={column.color}
              />
              <span>{column.tasks.length}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanTitle;
