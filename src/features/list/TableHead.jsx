function TableHead() {
  return (
    <thead>
      <tr className="divide-x-2 divide-gray-100">
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Current Phase
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Title
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Description
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Labels
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Due Date
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Task Creator
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
