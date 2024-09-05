import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { addColumn } from "./kanbanSlice";
import { useDispatch } from "react-redux";
function CreateColumn() {
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const [newColumnColor, setNewColumnColor] = useState("bg-gray-100");
  const dispatch = useDispatch();

  const handleAddColumn = () => {
    if (newColumnTitle.trim()) {
      // Log values to ensure they are correct
      console.log("Adding Column:", {
        title: newColumnTitle,
        color: newColumnColor,
      });

      // Dispatch the action to add a column
      dispatch(addColumn({ title: newColumnTitle, color: newColumnColor }));

      // Reset form
      setNewColumnTitle("");
      setNewColumnColor("bg-gray-100");
      setIsAddingColumn(false);
    } else {
      console.error("Column title is required");
    }
  };

  return (
    <div className="flex h-[750px] w-[280px] flex-col rounded-lg bg-white text-center">
      {!isAddingColumn ? (
        <button
          onClick={() => setIsAddingColumn(true)}
          className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 text-gray-600"
        >
          <FontAwesomeIcon icon={faPlus} className="text-2xl" />
          <span className="ml-2 text-lg">Add Column</span>
        </button>
      ) : (
        <div className="flex flex-col gap-4 p-4">
          <input
            type="text"
            placeholder="Column Title"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            className="rounded-lg border border-gray-300 p-2"
          />
          <div className="flex gap-2">
            {[
              "bg-green-400",
              "bg-orange-400",
              "bg-purple-400",
              "bg-red-400",
              "bg-gray-400",
              "bg-yellow-400",
            ].map((color) => (
              <button
                key={color}
                onClick={() => setNewColumnColor(color)}
                className={`h-8 w-8 rounded-full ${color} border-2 border-gray-300`}
                style={{
                  borderColor:
                    color === newColumnColor ? "black" : "transparent",
                }}
              />
            ))}
          </div>
          <button
            onClick={handleAddColumn}
            className="mt-2 rounded-lg bg-blue-500 p-2 text-white"
          >
            Add Column
          </button>
          <button
            onClick={() => setIsAddingColumn(false)}
            className="mt-2 rounded-lg bg-gray-500 p-2 text-white"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateColumn;
