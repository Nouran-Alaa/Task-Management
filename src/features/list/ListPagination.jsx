function ListPagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="mt-4 flex justify-center space-x-2">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="rounded bg-gray-200 px-3 py-1 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-3 py-1">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="rounded bg-gray-200 px-3 py-1 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default ListPagination;
