import { useState } from "react";
import ListPagination from "./ListPagination";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { formatDate, getTimeDifference } from "../../helper/helper";
import { useSelector } from "react-redux";
function ListTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const { searchTasks } = useSelector((state) => state.kanban);

  const allTasks = searchTasks.flatMap((phase) =>
    phase.tasks.map((task) => ({
      ...task,
      phaseTitle: phase.title,
      phaseColor: phase.color,
    })),
  );

  const totalPages = Math.ceil(allTasks.length / rowsPerPage);

  const currentTasks = allTasks.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <div className="h-full overflow-x-auto px-5 py-[150px] md:w-full md:py-[140px]">
      <table className="min-w-full border border-gray-200 bg-white">
        <TableHead />
        <TableBody
          currentTasks={currentTasks}
          formatDate={formatDate}
          getTimeDifference={getTimeDifference}
        />
      </table>

      <ListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ListTable;
