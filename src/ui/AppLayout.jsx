import Navbar from "./Navbar";
import KanbanBoard from "../features/kanban/KanbanBoard";
import CreateTask from "../features/tasks/CreateTask";
import { useEffect } from "react";
import ViewTask from "../features/tasks/ViewTask";
import ListTable from "../features/list/ListTable";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  fetchPhases,
  filterSearchTasks,
  toggleCreateTaskModal,
} from "../features/kanban/kanbanSlice";
import PageNotFound from "./PageNotFound";

function AppLayout() {
  const dispatch = useDispatch();
  const { phases, searchQuery, isCreateTaskModalOpen, isViewTaskModalOpen } =
    useSelector((state) => state.kanban);

  useEffect(() => {
    dispatch(fetchPhases());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterSearchTasks());
  }, [phases, searchQuery, dispatch]);

  const handleCreateTaskModal = () => {
    dispatch(toggleCreateTaskModal());
  };

  return (
    <div className="bg-white">
      <Navbar />
      {isViewTaskModalOpen && <ViewTask />}
      {isCreateTaskModalOpen && <CreateTask />}
      <Routes>
        <Route path="/" element={<Navigate to="/app/kanban" />} />
        <Route path="kanban" element={<KanbanBoard />} />
        <Route path="list" element={<ListTable />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <button
        onClick={handleCreateTaskModal}
        className="fixed bottom-4 left-4 rounded-lg bg-blue-500 px-10 py-4 text-white shadow-lg"
      >
        New Task
      </button>
    </div>
  );
}

export default AppLayout;
