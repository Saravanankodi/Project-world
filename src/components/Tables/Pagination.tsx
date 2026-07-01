"use client";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({
    currentPage,
    totalPages,
    totalItems,
    rowsPerPage,
    onPageChange,
}: PaginationProps) => {
    const startIndex = (currentPage - 1) * rowsPerPage;

    return (
        <div className="flex items-center justify-between  px-4 py-2 border-t border-[#D8E3D3] bg-[#F5FAF3]">
            <p className="text-sm text-black">
                Showing{" "}
                <span className="font-medium">{startIndex + 1}</span> to{" "}
                <span className="font-medium">
                    {Math.min(startIndex + rowsPerPage, totalItems)}
                </span>{" "}
                of <span className="font-medium">{totalItems}</span> projects
            </p>

            <div className="flex items-center gap-2">
                {/* Previous */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-600 disabled:opacity-40 hover:bg-gray-100 bg-white"
                >
                    &#8249;
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg  transition
                    ${currentPage === page
                                    ? "bg-[#0A8A43] border-[#0A8A43] text-white"
                                    : " text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {page}
                        </button>
                    );
                })}

                {/* Next */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-600 disabled:opacity-40 hover:bg-gray-100 bg-white"
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default Pagination;

