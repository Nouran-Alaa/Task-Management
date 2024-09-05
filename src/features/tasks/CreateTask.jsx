import { useState } from "react";
import QuickView from "./QuickView";
import TaskForm from "./TaskForm";

function CreateTask() {
  const getTodayDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16);
  };

  const [taskTitle, setTaskTitle] = useState("Task title");
  const [taskCreator, setTaskCreator] = useState("Write your name");
  const [dueDate, setDueDate] = useState(getTodayDate());
  const [priority, setPriority] = useState("low");


  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-transparent/10 p-4 backdrop-blur-sm sm:flex-row">
      <TaskForm
        taskTitle={taskTitle}
        taskCreator={taskCreator}
        dueDate={dueDate}
        priority={priority}
        setTaskCreator={setTaskCreator}
        setDueDate={setDueDate}
        setPriority={setPriority}
        setTaskTitle={setTaskTitle}
      />
      <QuickView
        title={taskTitle}
        creator={taskCreator}
        dueDate={dueDate}
        priority={priority}
      />
    </div>
  );
}

export default CreateTask;
