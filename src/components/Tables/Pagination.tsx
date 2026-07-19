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
    const getVisiblePages = () => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 3) {
            return [1, 2, 3, "...", totalPages];
        }

        if (currentPage >= totalPages - 2) {
            return [
                1,
                "...",
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
        }

        return [
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages,
        ];
    };
    return (
        <div className="flex items-center gap-1 justify-between  px-4 py-2 border-t border-[#D8E3D3] bg-[#F5FAF3]">
            <p className="text-[10px] sm:text-sm text-black">
                Showing{" "}
                <span className="font-medium">{startIndex + 1}</span> to{" "}
                <span className="font-medium">
                    {Math.min(startIndex + rowsPerPage, totalItems)}
                </span>{" "}
                of <span className="font-medium">{totalItems}</span> projects
            </p>

            <div className="flex items-center  gap-1 sm:gap-2">
                {/* Previous */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex h-6 w-6 sm:h-9 sm:w-9 items-center justify-center rounded-sm sm:rounded-lg border border-gray-300 text-gray-600 disabled:opacity-40 hover:bg-gray-100 bg-white"
                >
                    &#8249;
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-2">
                    {getVisiblePages().map((item, index) => {
                        if (item === "...") {
                            return (
                                <span
                                    key={`dots-${index}`}
                                    className="px-1 text-[#667085]"
                                >
                                    ...
                                </span>
                            );
                        }

                        return (
                            <button
                                key={`${item}-${index}`}
                                onClick={() => onPageChange(item as number)}
                                className={`flex h-6 w-6 sm:h-9 sm:w-9 items-center justify-center rounded-sm sm:rounded-lg text-xs  transition
                ${currentPage === item
                                        ? "bg-[#0A8A43] text-white"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>

                {/* Next */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex h-6 w-6 sm:h-9 sm:w-9 items-center justify-center rounded-sm sm:rounded-lg border border-gray-300 text-gray-600 disabled:opacity-40 hover:bg-gray-100 bg-white"
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default Pagination;

